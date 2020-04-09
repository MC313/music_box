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
    recursive: false,
    include_deleted: false,
    include_media_info: true,
    include_mounted_folders: false,
};

const isFile = (file) => file['.tag'] === 'file';

const isNotMusicData = ({name}) => name !== 'Music';

const formatPayload = ({ name, path_lower, id, link = null}) => {
    return {
        id,
        name,
        path: path_lower,
        link
    };
};

const formatSongPayload = ({link, metadata}) => formatPayload({...metadata, link});

//const searchForFolder = (folderName) => dbx.filesSearch({...searchOptions, query: folderName});

//const getMusicFolder = (results) => getOr(null, ['matches', 0], results);

// const getFilesInFolder = (folder) => dbx.filesListFolder({
//     ...listFolderOptions, path: `/${folder}` 
// });

const getFilesInMusicFolder = async () => {
    const files = await dbx.filesListFolder({
        ...listFolderOptions, path: `/music` 
    })
    return files.entries.filter(isNotMusicData);
};

const getStreamLink = (filePath) => dbx.filesGetTemporaryLink({path: filePath});

const paginateResponse = (res, resultsPerPage) => 
    chunk(resultsPerPage, res)
        .reduce((acc, val, idx) => ({...acc, [+(idx + 1)]: val}), {});

const createMusicApi = (res, musicArr, {params: {pageNumber}}) => {
    const paginatedRes = paginateResponse(musicArr, 25);
    res.json({
        data: paginatedRes[pageNumber + ''] || musicArr,
        currentPage: pageNumber || null 
    }); 
}

let albums = [];
let songs = [];

// Get all music from dropbox account
exports.getMusic = async () => {
    try {
        const musicFiles = await getFilesInMusicFolder();
    
        albums = [...musicFiles].filter((file) => !isFile(file)).map(formatPayload);

        streamLinksPromises = [...musicFiles].filter((file) => isFile(file)).map(({path_lower}) => getStreamLink(path_lower));
        
        const songsWithLinks = await Promise.all(streamLinksPromises);
        
        songs = songsWithLinks.map(formatSongPayload);
    
    } catch (error) {
        console.log('Error.', error);
        throw(new Error('Error accessing your dropbox acount. ', error));
    }
}

exports.albums = (req, res) => createMusicApi(res, albums, req);

exports.songs = (req, res) => createMusicApi(res, songs, req);