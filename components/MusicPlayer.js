import { Component, useContext } from 'react';

import { StoreProvider, StoreContext } from '../store';

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

const MusicPlayer = ({tracks}) => 
        <StoreProvider value={{state: { tracks: tracks}}}>
            <Head/>
            <div style={{height: '100%'}} className="App">
                <div style={styles}>
                    <Menu/>
                    <MainContent music={tracks}/>
                </div>
                <Controls artwork={Artwork}/>
            </div>
        </StoreProvider>


export default MusicPlayer;