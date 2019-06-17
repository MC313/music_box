import Track from './Track';

const styles = {
    width: '100%',
    overflow: 'hidden'
}

const listStyles = {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll'
}

const removeExt = (str) => {
    if(str.includes('.mp3')) {
        return str.replace(/.(mp3)/g, '');
    }

    if(str.includes('.m4a')) {
        return str.replace(/.(m4a)/g, '');
    }
}

const MainContent = ({music}) => {
    const tracks = music.map(
        ({name, path, link, id}) => <Track name={removeExt(name)} path={path} link={link} key={id}/>
    );
    return (
        <section style={styles}>
            <h1>Tracks</h1>
            <ul style={listStyles} className="tracks">
                {tracks}
            </ul>
        </section>
    );
}

export default MainContent;