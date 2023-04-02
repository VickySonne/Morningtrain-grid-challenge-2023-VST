import { Link } from 'react-router-dom'

const CatagoryLinks = () => {
    return (
        <nav>
            <Link to="/Animals">Animals</Link>
            <Link  to="/Flowers">Flowers</Link>
            <Link to="/InteriorDesign">Interior Design</Link>
        </nav>
    );
}
 
export default CatagoryLinks;