import DisplayButtons from "../components/DisplayButtons";

import ImageComp from "../components/ImageComp";
import Abe from "../images/animals/abe.jpg";
import Egern from "../images/animals/egern.jpg";
import Elefant from "../images/animals/elefant.jpg";
import Fugl from "../images/animals/fugl.jpg";
import Hund from "../images/animals/hund.jpg";
import Kat from "../images/animals/kat.jpg";
import Maage from "../images/animals/maage.jpg";
import Svane from "../images/animals/svane.jpg";
import ToElefanter from "../images/animals/toelefanter.jpg";
import ToFugle from "../images/animals/tofugle.jpg";

const AnimalsGrid = () => {
    return (
        <main className="gridpages-main-content">
            <div className="container">
                <div className="grid-heading-container">
                    <h3>Dyr</h3>
                    <DisplayButtons />
                </div>
                
                <ImageComp array={[
                            {id:1, src:Abe, title:"Pippis abe på en sten", owner:"Nils Söderman", alt:"En grå abe der sidder på en sten", masonsize:"normal"},
                            {id:2, src:Egern, title:"Egern på et hegn", owner:"Bruno Guerrero", alt:"Brunt egern på et hegn", masonsize:"tall"},
                            {id:3, src:Elefant, title:"A majestic creature", owner:"Jacek Janiczak", alt:"Et billede taget helt tæt på en elefants hoved", masonsize:"normal"},
                            {id:4, src:Fugl, title:"A puffin starts to fly after running on water", owner:"Mark König", alt:"En søpapegøje der løber hen ad vandet og starter med at flyve", masonsize:"big"},
                            {id:5, src:Hund, title:"Dog making puppy eyes", owner:"Huzaifa Ginwala", alt:"En trist hund der laver hvalpe øjne", masonsize:"wide"},
                            {id:6, src:Kat, title:"My cat named Havuç. Which means Carrot!", owner:"Efe Yagiz Soysal", alt:"En kat, der heller Gulerod, der slapper af i solen", masonsize:"normal"},
                            {id:7, src:Maage, title:"Højt Flyvende", owner:"Philipp Deus", alt:"En flyvende måge", masonsize:"big"},
                            {id:8, src:Svane, title:"A graceful swan", owner:"Yaroslav KUSH", alt:"En elegant svane der flyder på havet", masonsize:"tall"},
                            {id:9, src:ToElefanter, title:"Elephants in Malawi, Africa", owner:"Craig Manners", alt:"To elefanter der leger i et vandhul i Malawi, Afrika", masonsize:"normal"},
                            {id:10, src:ToFugle, title:"To fugle ved strandkanten", owner:"Brian Breeden", alt:"To små grå fugle ved strankanten", masonsize:"normal"}
                ]}/>
            </div>
        </main>
    );
};
 
export default AnimalsGrid;