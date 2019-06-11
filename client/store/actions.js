export const actionTypes = {
    SET_TRACKS: 'SET_TRACKS',
    UPDATE_CURRENT_TRACK: 'UPDATE_CURRENT_TRACK',
    SET_ALBUMS: 'SET_ALBUMS',
    UPDATE_CURRENT_ALBUM: 'UPDATE_CURRENT_ALBUM',
    UPDATE_PLAY_STATE: 'UPDATE_PLAY_STATE',
};

const setTracksAction = (payload) => ({
    type: actionTypes.SET_TRACKS,
    payload
});

const updateCurrentTrackAction = (payload) => ({
    type: actionTypes.UPDATE_CURRENT_TRACK,
    payload
});

const setAlbumsAction = (payload) => ({
    type: actionTypes.SET_ALBUMS,
    payload
});

const updateCurrentAlbumAction = (payload) => ({
    type: actionTypes.UPDATE_CURRENT_ALBUM,
    payload
});

const updatePlayStateAction = (payload) => ({
    type: actionTypes.UPDATE_PLAY_STATE,
    payload
});

export const actions = {
    setTracksAction,
    updateCurrentTrackAction,
    setAlbumsAction,
    updateCurrentAlbumAction,
    updatePlayStateAction
};