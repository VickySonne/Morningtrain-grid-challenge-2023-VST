import CatagoryMenu from './CatagoryMenu';

const HeaderNav = () => {
    return (
        <header>
            <div className="header-content container">
                <p>Forside</p>
                <h2>Vicky Sonne Thomsen</h2>
                <CatagoryMenu />
            </div>
        </header>
    );
};
 
export default HeaderNav;