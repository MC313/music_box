const styles = {
    width: '65%',
    height: '5px',
    position: 'relative',
    margin: '25px',
    borderRadius: '20px',
    backgroundColor: '#000'
};

const btnStyles = {
    width: '15px',
    height: '15px',
    position: 'absolute',
    top: '-5px',
    left: '0px',
    borderRadius: '50%',
    borderStyle: 'none',
    backgroundColor: '#fff'
}

const TrackTimeStatus = ({time}) => 
    <div style={styles}>
        <button type="button" style={btnStyles}></button>
        <p>{time}</p>
    </div>

export default TrackTimeStatus;