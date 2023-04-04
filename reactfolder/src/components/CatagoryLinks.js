import { Link } from 'react-router-dom'

const CatagoryLinks = (props) => {
    return (
        <nav className="dropdown-menu">
                <Link to="/Animals" onClick={() => props.isMobile && props.closeDropdown()}><p>Dyr</p></Link>
                <Link  to="/Flowers" onClick={() => props.isMobile && props.closeDropdown()}><p>Blomster</p></Link>
                <Link to="/Interior" onClick={() => props.isMobile && props.closeDropdown()}><p>Indretning</p></Link>
            
        </nav>
    );
}
 
export default CatagoryLinks;