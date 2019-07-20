export const actionTypes = {
    SET_SONGS: 'SET_SONGS',
    SET_CURRENT_SONG: 'SET_CURRENT_SONG',
    SET_ALBUMS: 'SET_ALBUMS',
    SET_CURRENT_ALBUM: 'SET_CURRENT_ALBUM',
    UPDATE_PLAY_STATE: 'UPDATE_PLAY_STATE',
};

const setSongsAction = (payload) => ({
    type: actionTypes.SET_SONGS,
    payload
});

const setCurrentSongAction = (payload) => ({
    type: actionTypes.SET_CURRENT_SONG,
    payload
});

const setAlbumsAction = (payload) => ({
    type: actionTypes.SET_ALBUMS,
    payload
});

const setCurrentAlbumAction = (payload) => ({
    type: actionTypes.SET_CURRENT_ALBUM,
    payload
});

const updatePlayStateAction = (payload) => ({
    type: actionTypes.UPDATE_PLAY_STATE,
    payload
});

export const actions = {
    setSongsAction,
    setCurrentSongAction,
    setAlbumsAction,
    setCurrentAlbumAction,
    updatePlayStateAction
};