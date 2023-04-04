import { useEffect } from "react";
import { Link } from 'react-router-dom';

import Abe from "../images/animals/abe.jpg";
import Egern from "../images/animals/egern.jpg";
import Elefant from "../images/animals/elefant.jpg";
import Mursten from "../images/interior/mursten.jpg";
import Hund from "../images/animals/hund.jpg";
import Trappe from "../images/interior/trappe.jpg";
import Stue from "../images/interior/stue.jpg";
import Vaeg from "../images/interior/vaeg.jpg";
import Hvid from "../images/flowers/hvid.jpg";
import Roser from "../images/flowers/roser.jpg";
import Raps from "../images/flowers/raps.jpg";
import Gul from "../images/flowers/gul.jpg";
import Kirsebaer from "../images/flowers/kirsebaer.jpg";

const FrontPage = () => {

    const slideshowArray = [Hvid, Abe, Roser, Trappe, Vaeg, Egern, Raps, Elefant, Mursten, Gul, Hund, Stue, Kirsebaer];
    let i = 0;

    useEffect(() => {
        const slideShow = setInterval(() => {
                let image = document.querySelector("#image");

                image.src = slideshowArray[i];
                
                if(i >= slideshowArray.length - 1){
                    i=0;
                } else {
                    i++;
                }
            }, 5000);
            return () => clearInterval(slideShow);
    }, []);

    return (
        <main className="frontpage-main-styling">
            <img id="image" src={Elefant}/>
            <div className="container catagory-buttons">
                <Link to="/Animals"><p>Dyr</p></Link>
                <Link to="/Flowers"><p>Blomster</p></Link>
                <Link to="/Interior"><p>Indretning</p></Link>
            </div>
        </main>
    );
};
 
export default FrontPage;