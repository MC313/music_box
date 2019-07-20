const { chunk, getOr } = require('lodash/fp');

const dbxConfig = require('./dropbox.config');
const { dbx } = dbxConfig;

const searchOptions = {
    path: '',
    query: 'music',
    start: 0,
    max_results: 20,
    mode: {".tag": "filename"}
};

const listFolderOptions = {
    recursive: true,
    include_deleted: false,
    include_media_info: true,
    include_mounted_folders: false,
};


const isFile = (file) => file['.tag'] === 'file';

const isNotMusic = ({name}) => name !== 'Music';

const formatPayload = ({link, metadata}) => {
    const { name, path_lower, id} = metadata;
    return {
        id,
        name,
        path: path_lower,
        link
    };
};

const getMusicFolder = (results) => getOr(null, ['matches', 0], results);

const paginateResponse = (res, resultsPerPage) => 
    chunk(resultsPerPage, res)
        .reduce((acc, val, idx) => ({...acc, [idx]: val}), {});

exports.music = async (req, res, next) => {
    try {
        const results = await dbx.filesSearch(searchOptions);
        const folder = getOr(null, ['matches', 0], results);
        const files = await dbx.filesListFolder({
            path: folder.metadata.path_lower, ...listFolderOptions 
        });
        const musicData = files.entries
            .filter(isNotMusic)
            .filter(isFile);

        const streamLinksPromises = musicData.map(({path_lower}) => dbx.filesGetTemporaryLink({path: path_lower}));
        const filesWithLinks = await Promise.all(streamLinksPromises);
        const music = filesWithLinks.map(formatPayload);

        const paginatedRes = paginateResponse(music, 25);

        console.log('req', req)

        res.json({ data: music });
    } catch (error) {
        console.log('Error.', error);
        return next(new Error('Error access your dropbox acount. ', error));
    }
}