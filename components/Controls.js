import TrackSeeker from './TrackSeeker';
import PreviousBtn from './PreviousBtn';
import PlayBtn from './PlayBtn';
import NextBtn from './NextBtn';

const style = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
}

const controlBtm = {
    justifyContent: 'space-between',
    display: 'flex',
    'alignItems': 'center',
    'width': '60%',
}

const Controls = ({artwork}) => (
    <div style={style} className="controls">
        <TrackSeeker />
        <div style={controlBtm} className="controls__bottom">
            <PreviousBtn />
            <PlayBtn />
            <NextBtn />
        </div>
    </div>
);

export default Controls;