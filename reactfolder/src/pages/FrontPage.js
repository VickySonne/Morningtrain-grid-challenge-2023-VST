import Abe from "../images/animals/abe.jpg";
import Egern from "../images/animals/egern.jpg";
import Elefant from "../images/animals/elefant.jpg";

const FrontPage = () => {

    const slideshowArray = [Abe, Egern, Elefant];

    let i = 0;

    function slideShow() {
        let image = document.querySelector("#image");

        image.src = slideshowArray[i];
        
        if(i >= slideshowArray.length - 1){
            i=0;
        } else {
            i++;
        }
    };

    setInterval(slideShow, 5000);

    return (
        <main className="frontpage-main-styling">
            <img id="image" src={Elefant}/>
            <div className="container">
                <button>Animals</button>
                <button>Flowers</button>
                <button>Interior Design</button>
            </div>
        </main>
    );
};
 
export default FrontPage;