import { useContext } from 'react';

import { StoreContext } from '../store';

const styles = {
    listStyle: 'none',
};

const Track = ({name, link, path, id}) => {
    const { actions, dispatch } = useContext(StoreContext);

    const setCurrentSong = () => {
        dispatch(
            actions.setCurrentSongAction({name, link, path, id})
        );
    }

    return (
        <li style={{...styles, cursor: 'pointer'}} onClick={() => setCurrentSong()}>
            <p>{name}</p>
        </li>
    );
};

export default Track;