const controlBtnStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    borderRadius: '50%',
    width: '65px',
    height: '65px',
    lineHeight: '0px',
    padding: '0px'
};

const pauseIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
</svg>;

const playIcon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M0 0h48v48H0z" fill="none"/>
    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z" fill="#fff"/>
</svg>;

const PlayButton = ({handleClick, isPlaying}) => {  
    return  <button style={controlBtnStyle} onClick={handleClick}>
                {isPlaying ? pauseIcon : playIcon}
            </button>;
}

export default PlayButton;