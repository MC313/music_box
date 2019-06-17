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
    include_media_info: false,
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

exports.music = async (req, res, next) => {
    try {
        const results = await dbx.filesSearch(searchOptions);
        const folder = results && results['matches'] && results['matches'][0];
        const files = await dbx.filesListFolder({
            path: folder.metadata.path_lower, ...listFolderOptions 
        });
        const musicData = files.entries
            .filter(isNotMusic)
            .filter(isFile);

        const streamLinksPromises = musicData.map(({path_lower}) => dbx.filesGetTemporaryLink({path: path_lower}));
        const filesWithLinks = await Promise.all(streamLinksPromises);
        const music = filesWithLinks.map(formatPayload);
        res.json({ data: music });
    } catch (error) {
        console.log('Error.', error);
        return next(new Error('Error access your dropbox acount. ', error));
    }
}