import CatagoryLinks from './CatagoryLinks';

import {useState} from 'react'

import {IoMdArrowDropdown} from "react-icons/io";
import {IoMdArrowDropup} from "react-icons/io";

const CatagoryMenu = () => {
    
    const [open, setOpen] = useState(false);

    const dropdownIcon = <IoMdArrowDropdown className="dropdown-icon" size="2em" />

    const dropdownCloseIcon = <IoMdArrowDropup className="dropup-icon" size="2em"  />

    const closeDropdown = () => setOpen(false);
    
    return (
        <div className="dropdown">
            <p className="dropdown-icon orange-hover" onClick={() => setOpen(!open)}>
                Kategorier {open ? dropdownCloseIcon : dropdownIcon}
            </p>
            {open && <CatagoryLinks isMobile={true} closeDropdown={closeDropdown}/>}
        </div>
    );
};
 
export default CatagoryMenu;