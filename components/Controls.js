import TrackSeeker from './TrackSeeker';
import PreviousBtn from './PreviousBtn';
import PlayBtn from './PlayBtn';
import NextBtn from './NextBtn';

const Controls = () => (
    <div className="controls">
        <TrackSeeker />
        <div className="controls__bottom">
            <PreviousBtn />
            <PlayBtn />
            <NextBtn />
        </div>
    </div>
);

export default Controls;