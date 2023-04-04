import { Link } from 'react-router-dom';

import CatagoryMenu from './CatagoryMenu';

const HeaderNav = () => {
    return (
        <header>
            <div className="header-content container">
                <Link to="/"><p className="frontpage-button">Forside</p></Link>
                <h2 className="header-name" ><a href="https://sonnedesignsolutions.com/" target="_blank" rel="noreferrer">Vicky Sonne Thomsen</a></h2>
                <CatagoryMenu />
            </div>
        </header>
    );
};
 
export default HeaderNav;