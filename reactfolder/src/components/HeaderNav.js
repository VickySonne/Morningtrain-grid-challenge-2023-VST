import { Link } from 'react-router-dom';
import CatagoryMenu from './CatagoryMenu';

const HeaderNav = () => {
    return (
        <header>
            <div className="header-content container">
                <Link to="/">Forside</Link>
                <h2>Vicky Sonne Thomsen</h2>
                <CatagoryMenu />
            </div>
        </header>
    );
};
 
export default HeaderNav;