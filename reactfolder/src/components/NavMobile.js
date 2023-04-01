import CatagoryLinks from './CatagoryLinks';
import {useState} from 'react'
import {HiMenu} from "react-icons/hi";
import {IoClose} from "react-icons/io5";

const NavMobile = () => {
    
    const [open, setOpen] = useState(false);

    const burgerMenuIcon = <HiMenu className="burger-menu-icon" size="2em" color="black" onClick={() => setOpen(!open)}/>

    const burgerMenuCloseIcon = <IoClose className="burger-menu-icon" size="2em" color="black" onClick={() => setOpen(!open)}/>

    const closeMobileNav = () => setOpen(false);
    
    return (
        <nav>
            <div className="nav-icon">
                {open ? burgerMenuCloseIcon : burgerMenuIcon}
            </div>
            {open && <CatagoryLinks isMobile={true} closeMobileNav={closeMobileNav}/>}
        </nav>
    );
};
 
export default NavMobile;