import { useContext } from 'react';

import { StoreContext } from '../store';
import Track from './Track';

const styles = {
    width: '100%',
    overflow: 'hidden'
}

const listStyles = {
    height: 'calc(100% - 70px)',
    overflowX: 'hidden',
    overflowY: 'scroll'
}

const _removeExt = (str) => {
    if(str.includes('.mp3') || str.includes('.m4a')) {
        return str.replace(/.(mp3)|.(m4a)/g, '');
    }
    return str;
}

const MainContent = () => {

    const { state } = useContext(StoreContext);

    console.log()

    const songs = state.songs && state.songs.map(({name, path, link, id}) => 
        <Track
            name={_removeExt(name)} 
            path={path} 
            link={link} 
            id={id} 
            key={id}
        />
    );

    const albums = state.albums && state.albums.map(({name, path, link, id}) => 
        <Track
            name={name} 
            path={path} 
            link={link} 
            id={id} 
            key={id}
        />
    );

    return (
        <div style={styles}>
            <section style={{height: '50%'}}>
                <h1 style={{paddingLeft: '10px'}}>Albums</h1>
                {
                    state ? 
                    <ul style={listStyles} className="tracks">
                        {albums}
                    </ul> 
                    :
                    <p>Loading.......</p>
                }
            </section>
            <section style={{height: '50%'}}>
                <h1 style={{paddingLeft: '10px'}}>Songs</h1>
                {
                    state ? 
                    <ul style={listStyles} className="songs">
                        {songs}
                    </ul> 
                    :
                    <p>Loading.......</p>
                }
            </section>
        </div>
    );
}

export default MainContent;