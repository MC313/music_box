import fetch from 'isomorphic-fetch';

import MusicPlayer from '../components/MusicPlayer';

const Index = ({music}) => {
    return (
        <MusicPlayer tracks={music} />
    );
}

Index.getInitialProps = async () => {
    try {
        const res = await fetch('http://localhost:9000/api/music');
        const response = await res.json();
        const { data } = response;
        return { music: data };
    } catch (error) {
        console.error('Error getting music.', error)
        return {error: 'ERROR', errorMsg: error};
    }
};

export default Index;

