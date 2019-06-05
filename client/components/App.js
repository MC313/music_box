import Artwork from './Artwork';
import Controls from './Controls';
import Head from './Head';


function App() {
  return (
    <>
      <Head/>
      <div className="App">
        <Artwork />
        <Controls />
      </div>
    </>
  );
}

export default App;
