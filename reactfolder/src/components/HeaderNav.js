import { Link } from 'react-router-dom';

import CatagoryMenu from './CatagoryMenu';

const HeaderNav = () => {
    return (
        <header>
            <div className="header-content container">
                <Link to="/"><p>Forside</p></Link>
                <h2 className="header-name" >Vicky Sonne Thomsen</h2>
                <CatagoryMenu />
            </div>
        </header>
    );
};
 
export default HeaderNav;