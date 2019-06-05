const PreviousButton = ({handleClick}) => 
    <button onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" fill="#fff"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    </button>;

export default PreviousButton;