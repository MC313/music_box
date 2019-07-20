const { chunk, getOr } = require('lodash/fp');

const dbxConfig = require('./dropbox.config');
const { dbx } = dbxConfig;

const searchOptions = {
    path: '',
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

const isNotMusicData = ({name}) => name !== 'Music';

const formatPayload = ({link, metadata}) => {
    const { name, path_lower, id} = metadata;
    return {
        id,
        name,
        path: path_lower,
        link
    };
};

const searchForFolder = (folderName) => dbx.filesSearch({...searchOptions, query: folderName});

const getMusicFolder = (results) => getOr(null, ['matches', 0], results);

const getFilesInFolder = (folder) => dbx.filesListFolder({
        path: `/${folder}`, ...listFolderOptions 
});

const getFilesInMusicFolder = () => getFilesInFolder('music');

const paginateResponse = (res, resultsPerPage) => 
    chunk(resultsPerPage, res)
        .reduce((acc, val, idx) => ({...acc, [idx]: val}), {});

exports.music = async (req, res, next) => {
    try {
        const musicFiles = await getFilesInMusicFolder().entries.filter(isNotMusicData);
        const streamLinksPromises = musicFiles.map(({path_lower}) => dbx.filesGetTemporaryLink({path: path_lower}));
        const filesWithLinks = await Promise.all(streamLinksPromises);
        const music = filesWithLinks.map(formatPayload);

        const paginatedRes = paginateResponse(music, 25);

        console.log('req', paginatedRes)

        res.json({ 
            data: paginatedRes
        })
    } catch (error) {
        console.log('Error.', error);
        return next(new Error('Error access your dropbox acount. ', error));
    }
}