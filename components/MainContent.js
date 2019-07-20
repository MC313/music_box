import { useContext } from 'react';

import { StoreContext } from '../store';
import Track from './Track';

const styles = {
    width: '100%',
    overflow: 'hidden'
}

const listStyles = {
    height: 'calc(100% - 60px)',
    overflowX: 'hidden',
    overflowY: 'scroll'
}

const _removeExt = (str) => {
    if(str.includes('.mp3') || str.includes('.m4a')) {
        return str.replace(/.(mp3)|.(m4a)/g, '');
    }
}

const MainContent = () => {

    const { state } = useContext(StoreContext);

    const songs = state.songs.map(({name, path, link, id}) => 
        <Track
            name={_removeExt(name)} 
            path={path} 
            link={link} 
            id={id} 
            key={id}
        />
    );

    return (
        <section style={styles}>
            <h1 style={{paddingLeft: '10px'}}>Tracks</h1>
            {
                state ? 
                <ul style={listStyles} className="tracks">
                    {songs}
                </ul> 
                :
                <p>Loading.......</p>
            }
        </section>
    );
}

export default MainContent;