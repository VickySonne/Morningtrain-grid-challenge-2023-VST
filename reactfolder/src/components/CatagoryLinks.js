import { Link } from 'react-router-dom'

const CatagoryLinks = (props) => {
    return (
        <nav className="dropdown-menu">
                <Link to="/Animals" onClick={() => props.isMobile && props.closeDropdown()}><p>Dyr</p></Link>
                <Link  to="/Flowers"><p>Blomster</p></Link>
                <Link to="/InteriorDesign"><p>Indretning</p></Link>
            
        </nav>
    );
}
 
export default CatagoryLinks;