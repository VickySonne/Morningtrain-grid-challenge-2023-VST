import ImgPopup from "./ImgPopup";
import { useState } from "react";


const ImageComp = (props) => {

    const {array} = props;

    const [buttonPopup, setButtonPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const displayImage = (imgsrc) => {
      setButtonPopup(true);
      setSelectedImage(imgsrc)
    };

    return (
        <ul id="images-displayed" className="style-list">
            {array.map((array) => (
              <li className={array.masonsize} key={array.id}>
                <img onClick={() => displayImage(array.src)} loading="lazy" src={array.src} alt={array.alt}/>
                <div className="image-text">
                  <h4 className="image-title">{array.title}</h4>
                  <p className="image-owner">Fotograf: {array.owner}</p>
                </div>
              </li>  
            ))}
            <ImgPopup trigger={buttonPopup} imgsrc={selectedImage} setTrigger={setButtonPopup}/>
        </ul>
    );
};
 
export default ImageComp;