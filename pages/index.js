import fetch from 'isomorphic-fetch';
import App from '../client/components/App';

const Index = () =>  <App/>;

Index.getInitialProps = async () => {
    try {
        const res = await fetch('http://localhost:9000/api/music');
        const data = await res.json();
        console.log('TRACKS', data)
        return { music: data.music };
    } catch (error) {
        console.error('Error getting music.', error)
    }
};

export default Index;

