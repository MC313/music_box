const styles = {
    listStyle: 'none'
};

const Track = ({name, link, path}) => (
    <li style={styles}>
        <p>{name}</p>
    </li>
);

export default Track;