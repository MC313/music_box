const styles = {
    width: '30%',
    minWidth: '200px',
    maxWidth: '400px',
    height: '100%',
    border: '1px solid'
}

const Menu = () => 
    <aside style={styles}>
        <nav>
            <li>Tracks</li>
            <li>Albums</li>
            <li>Settings</li>
        </nav>
    </aside>

export default Menu;