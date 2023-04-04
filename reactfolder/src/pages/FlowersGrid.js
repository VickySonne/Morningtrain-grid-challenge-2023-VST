import DisplayButtons from "../components/DisplayButtons";
import ImageComp from "../components/ImageComp";

import Gul from "../images/flowers/gul.jpg";
import Kirsebaer from "../images/flowers/kirsebaer.jpg";
import Pretty from "../images/flowers/pretty.jpg";
import Tulipan from "../images/flowers/tulipan.jpg";
import Hvid from "../images/flowers/hvid.jpg";
import Roser from "../images/flowers/roser.jpg";
import Smoer from "../images/flowers/smoer.jpg";
import Raps from "../images/flowers/raps.jpg";
import Wild from "../images/flowers/wild.jpg";

const FlowersGrid = () => {
    return (
        <main className="gridpages-main-content">
            <div className="container">
                <div className="grid-heading-container">
                    <h3>Blomster</h3>
                    <DisplayButtons />
                </div>
                
                <ImageComp array={[
                            {id:1, src:Gul, title:"California blooming", owner:"Sergey Schmidt", alt:"Gule blomster i Diamond Valley Lake, California", masonsize:"normal"},
                            {id:2, src:Kirsebaer, title:"Kungsträdgården cherry blossom", owner:"Arno Smit", alt:"Kirsebær træs krone", masonsize:"tall"},
                            {id:3, src:Pretty, title:"Blomster i fokus", owner:"Marivi Pazos", alt:"Et billede tæt på hvide blomster med lyserøde detaljer", masonsize:"big"},
                            {id:4, src:Tulipan, title:"Et hav a farver", owner:"Ioann-Mark Kuznietsov", alt:"Mange tulipaner i alle farver", masonsize:"tall"},
                            {id:5, src:Hvid, title:"Pretty pink flowers", owner:"Tomoko Uji", alt:"Lyserøde spinkle blomster", masonsize:"big"},
                            {id:6, src:Roser, title:"Roses are red", owner:"Biel Morro", alt:"Smukke store røde roser", masonsize:"wide"},
                            {id:7, src:Smoer, title:"Qualified flowers", owner:"Mitchel Lensik", alt:"Smørblomster", masonsize:"normal"},
                            {id:8, src:Raps, title:"Happy", owner:"Tim Mossholder", alt:"En rapsmark i fuld flor", masonsize:"tall"},
                            {id:9, src:Wild, title:"Wildflowers", owner:"Nature Uninterrupted Photography", alt:"En mark af wilde blomster", masonsize:"normal"},
                ]}/>
            </div>
        </main>
    );
};
 
export default FlowersGrid;