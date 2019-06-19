import { useContext, useReducer } from 'react';

import { StoreContext } from '../store';

const styles = {
    listStyle: 'none',
    ':hover': {
        cursor: 'pointer'
    }
};

const Track = ({name, link, path, id}) => {
    const { actions, dispatch, state } = useContext(StoreContext);
    const setCurrentTrack = () => dispatch(
        actions.setCurrentTrackAction({name, link, path, id})
    );

    return (
        <li style={styles} onClick={() => setCurrentTrack()}>
            <p>{name}</p>
        </li>
    );
};

export default Track;