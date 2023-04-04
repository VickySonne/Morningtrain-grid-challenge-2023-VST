import DisplayButtons from "../components/DisplayButtons";
import ImageComp from "../components/ImageComp";

import Hjoerne from "../images/interior/hjoerne.jpg";
import Stue from "../images/interior/stue.jpg";
import Vaeg from "../images/interior/vaeg.jpg";
import Vinduer from "../images/interior/vinduer.jpg";
import Lampe from "../images/interior/lampe.jpg";
import Planter from "../images/interior/planter.jpg";
import Trappe from "../images/interior/trappe.jpg";
import Reol from "../images/interior/reol.jpg";
import Mursten from "../images/interior/mursten.jpg";
import Boeger from "../images/interior/boeger.jpg";

const InteriorGrid = () => {
    return (
        <main className="gridpages-main-content">
            <div className="container">
                <div className="grid-heading-container">
                    <h3>Indretning</h3>
                    <DisplayButtons />
                </div>
                
                <ImageComp array={[
                            {id:1, src:Hjoerne, title:"Little garden", owner:"Huy Phan", alt:"En lille indendørs have i potter", masonsize:"normal"},
                            {id:2, src:Stue, title:"En moderne stue", owner:"Jarek Ceborski", alt:"En moderne stue med en blå sofa", masonsize:"tall"},
                            {id:3, src:Vaeg, title:"Boho Inspired living room wall", owner:"Manja Vitolic", alt:"En boho inspireret væg med billeder og blomster", masonsize:"big"},
                            {id:4, src:Vinduer, title:"Room with three high windows", owner:"Hans Eiskonen", alt:"Et dunkelt rum med 3 høje vinduer", masonsize:"tall"},
                            {id:5, src:Lampe, title:"Floor lamp near a wall", owner:"David van Dijk", alt:"En gulv lampe tæt på en væg", masonsize:"normal"},
                            {id:6, src:Planter, title:"Sunny day on our lovely living room", owner:"Sven Brandsma", alt:"En solrig da i en stue med store planter", masonsize:"tall"},
                            {id:7, src:Trappe, title:"Spiral til toppen", owner:"Serhat Beyazkaya", alt:"En spiral trappe lavet af cement", masonsize:"normal"},
                            {id:8, src:Reol, title:"Cozy Clutter", owner:"John Mark Arnold", alt:"En reol med pynt, planter og sterinlys", masonsize:"big"},
                            {id:9, src:Mursten, title:"Stunning apartment in Budapest", owner:"Justin Schüler", alt:"En flot rustik stue med en murstensvæg", masonsize:"normal"},
                            {id:10, src:Boeger, title:"Bogreoler i en hyggelig cafe", owner:"Pawel Czerwinski", alt:"Store bogreoler med hængende planter i en cafe", masonsize:"wide"}
                ]}/>
            </div>
        </main>
    );
};
 
export default InteriorGrid;