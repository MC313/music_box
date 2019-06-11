import { useContext } from 'react';

import { StoreContext } from '../store';

import Artwork from './Artwork';
import Controls from './Controls';
import Head from './Head';
import MainContent from './MainContent';
import Menu from './Menu';

const styles = {
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '150px'
}

function App() {
  const { tracks } = useContext(StoreContext);
  console.log('tracks', tracks)
  return (
    <>
      <Head/>
      <div style={{height: '100%'}} className="App">
        <div style={styles}>
          <Menu/>
          <MainContent/>
        </div>
        <Controls artwork={Artwork}/>
      </div>
    </>
  );
}

export default App;
