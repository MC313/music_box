const controlBtnStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    borderRadius: '50%',
    width: '55px',
    height: '55px',
    lineHeight: '0px'
};

const NextButton = ({handleClick}) => 
    <button style={controlBtnStyle} onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="#fff"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    </button>;

export default NextButton;