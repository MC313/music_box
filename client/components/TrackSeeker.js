const style = {
    margin: '25px',
    width: '65%'
};

const PlayButton = ({handleClick}) => 
    <progress style={style} max="100" value="12"></progress>

export default PlayButton;