import { Fragment, useContext, useEffect } from 'react';

import { StoreContext } from '../store';
import Artwork from '../components/Artwork';
import Controls from '../components/Controls';
import Head from '../components/Head';
import MainContent from '../components/MainContent';
import Menu from '../components/Menu';

const styles = {
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '150px'
}

const MusicPlayer = ({albums, songs}) => {

    const { actions, dispatch } = useContext(StoreContext);

    useEffect(() => {
        dispatch(actions.setSongsAction(songs));
        dispatch(actions.setAlbumsAction(albums));
    }, [albums, songs]);
    
    return(    
        <Fragment>
            <Head/>
            <div style={{height: '100%'}} className="App">
                <div style={styles}>
                    <Menu/>
                    <MainContent/>
                </div>
                <Controls artwork={Artwork}/>
            </div>
        </Fragment>
    );
}

export default MusicPlayer;