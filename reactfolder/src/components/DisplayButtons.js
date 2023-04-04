import { useEffect, useState } from 'react';
import {CiGrid41, CiBoxList, CiGrid31} from 'react-icons/ci';

const DisplayButtons = () => {

    const [displayClass, setDisplayClass] = useState("style-mason");

    useEffect(() => {
        const imagesDisplayed = document.querySelector("#images-displayed");
        imagesDisplayed.classList.remove("style-mason", "style-grid", "style-details");
        imagesDisplayed.classList.add(displayClass);
    }, [displayClass]);


    return (
        <div className="display-buttons">
            <CiGrid31 className='orange-hover' size="2em" color="#3a3d43" onClick={() => {setDisplayClass("style-mason")}}/>
            <CiGrid41 className='orange-hover' size="2em" color="#3a3d43" onClick={() => {setDisplayClass("style-grid")}}/>
            <CiBoxList className='orange-hover' size="2em" color="#3a3d43" onClick={() => {setDisplayClass("style-details")}}/>
        </div>
    );
}
 
export default DisplayButtons;