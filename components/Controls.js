import { useState, useRef } from 'react';

import ArtWork from './Artwork';
import TrackTimeStatus from './TrackTimeStatus';
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

const Controls = ({artwork, trackLink}) => {
    const [isPlaying, setPlayState] = useState(false);

    const audioRef = useRef(null);

    // const AudioContext = window.AudioContext || window.webkitAudioContext;
    // const audioCtx = new AudioContext();
    // const track = audioCtx.createMediaElementSource(audioRef);

    const onPlay = (audioElement) => {
        if(!audioElement) { return; }
        
        if(!audioElement.paused && audioElement.currentTime) {
            audioElement.pause();
            setPlayState(!isPlaying);
        } else {
            audioElement.play();
            setPlayState(!isPlaying);
        }
    }

    return (
        <div style={style} className="controls">
            <audio src="/static/LoveInTheSky(Explicit Version).mp3" ref={audioRef} crossOrigin="anonynmous" type="audio/mp3"></audio>

            <TrackTimeStatus />
            <div style={controlBtm} className="controls__bottom">
                <PreviousBtn />

                <PlayBtn 
                    handleClick={() => onPlay(audioRef.current)} isPlaying={isPlaying}/>
                <NextBtn />
            </div>
        </div>
    );
}

export default Controls;