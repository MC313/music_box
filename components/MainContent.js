import Track from './Track';

const styles = {
    width: '100%',
    overflow: 'hidden'
}

const listStyles = {
    height: 'calc(100% - 60px)',
    overflowX: 'hidden',
    overflowY: 'scroll'
}

const removeExt = (str) => {
    if(str.includes('.mp3') || str.includes('.m4a')) {
        return str.replace(/.(mp3)/g, '') || str.replace(/.(m4a)/g, '');
    }
}

const MainContent = ({music}) => {

    const tracks = music.map(
        ({name, path, link, id}) => 
            <Track
                name={removeExt(name)} 
                path={path} 
                link={link} 
                id={id} 
                key={id}
            />
    );
    return (
        <section style={styles}>
            <h1>Tracks</h1>
            {
                music ? 
                <ul style={listStyles} className="tracks">
                    {tracks}
                </ul> 
                :
                <p>Loading.......</p>
            }
        </section>
    );
}

export default MainContent;