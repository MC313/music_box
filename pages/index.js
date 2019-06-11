    import fetch from 'isomorphic-fetch';
import { StoreConsumer, StoreProvider } from '../client/store';
import App from '../client/components/App';

const Index = ({music}) => (
    <StoreProvider>
        <StoreConsumer value={{state: {tracks: music}}}>
            {() => {
                return <App/>;
            }}
        </StoreConsumer>
    </StoreProvider>
);

Index.getInitialProps = async () => {
    try {
        const res = await fetch('http://localhost:9000/api/music');
        const data = await res.json();
        return { music: data.music };
    } catch (error) {
        console.error('Error getting music.', error)
    }
};

export default Index;

