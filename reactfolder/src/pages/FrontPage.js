import { useEffect } from "react";
import { Link } from 'react-router-dom';

import Abe from "../images/animals/abe.jpg";
import Egern from "../images/animals/egern.jpg";
import Elefant from "../images/animals/elefant.jpg";

const FrontPage = () => {

    const slideshowArray = [Abe, Egern, Elefant];
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
                <Link to="/InteriorDesign"><p>Indretning</p></Link>
            </div>
        </main>
    );
};
 
export default FrontPage;