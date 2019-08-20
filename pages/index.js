import fetch from 'isomorphic-fetch';
import MusicPlayer from '../components/MusicPlayer';

const Index = ({albums, songs}) => <MusicPlayer albums={albums} songs={songs} />

Index.getInitialProps = async () => {
    try {
        const albums = await fetch('http://localhost:9000/api/albums/1');
        const songs = await fetch('http://localhost:9000/api/songs/1');

        const albumsJSON = await albums.json();
        const songsJSON = await songs.json();
        
        return { albums: albumsJSON.data, songs: songsJSON.data };
    } catch (error) {
        console.error('Error getting music.', error)
        return {error: 'ERROR', errorMsg: error};
    }
};

export default Index;

