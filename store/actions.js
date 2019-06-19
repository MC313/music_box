export const actionTypes = {
    SET_TRACKS: 'SET_TRACKS',
    SET_CURRENT_TRACK: 'SET_CURRENT_TRACK',
    SET_ALBUMS: 'SET_ALBUMS',
    SET_CURRENT_ALBUM: 'SET_CURRENT_ALBUM',
    UPDATE_PLAY_STATE: 'UPDATE_PLAY_STATE',
};

const setTracksAction = (payload) => ({
    type: actionTypes.SET_TRACKS,
    payload
});

const setCurrentTrackAction = (payload) => ({
    type: actionTypes.SET_CURRENT_TRACK,
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
    setTracksAction,
    setCurrentTrackAction,
    setAlbumsAction,
    setCurrentAlbumAction,
    updatePlayStateAction
};