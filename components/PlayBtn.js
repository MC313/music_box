const controlBtnStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    borderRadius: '50%',
    width: '65px',
    height: '65px',
    lineHeight: '0px',
    padding: '0px'
};

const PlayButton = ({handleClick}) => 
    <button style={controlBtnStyle} onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M0 0h48v48H0z" fill="none"/>
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z" fill="#fff"/>
        </svg>
    </button>;

export default PlayButton;