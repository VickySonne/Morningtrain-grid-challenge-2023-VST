import NavMenu from './NavMenu';
import NavMobile from './NavMobile';

const HeaderNav = () => {
    return (
        <header>
            <p>Forside</p>
            <h2>Vicky Sonne Thomsen</h2>
            <NavMenu/>
            <NavMobile/>
        </header>
    );
};
 
export default HeaderNav;