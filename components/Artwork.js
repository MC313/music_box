const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px', 
    height: '300px', 
    border: '2px solid #000',
    textAlign: 'center', 
    margin: '10px auto',
};

const Artwork = ({img}) => 
    <picture style={styles}>
        <source srcSet={img || '../assets/music-note.png'} />
        <img src={img || '../assets/music-note.png'} alt={img ? 'Album Artwork' : 'Music Note'}/>
    </picture>;

export default Artwork;