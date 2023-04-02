import { Link } from 'react-router-dom'

const CatagoryLinks = (props) => {
    return (
        <nav>
            <Link to="/Animals" onClick={() => props.isMobile && props.closeDropdown()}>Animals</Link>
            <Link  to="/Flowers">Flowers</Link>
            <Link to="/InteriorDesign">Interior Design</Link>
        </nav>
    );
}
 
export default CatagoryLinks;