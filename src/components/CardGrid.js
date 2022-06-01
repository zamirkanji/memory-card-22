import { useState } from "react";
import Card from "./Card";
import demarDerozan from "./images/demarDerozan.jpg";
import ericBledsoe from "./images/ericBledsoe.jpg";
import goranDragic from "./images/goranDragic.jpg";
import joelEmbiid from "./images/joelEmbiid.jpg";
import johnWall from "./images/johnWall.jpg";
import jrueHoliday from "./images/jrueHoliday.jpg";
import nickYoung from "./images/nickYoung.jpg";
import patrickBeverley from "./images/patrickBeverley.jpg";
import paulGeorge from "./images/paulGeorge.jpg";
import tristanThompson from "./images/tristanThompson.jpg";
import willBarton from "./images/willBarton.jpg";
import zachLavine from "./images/zachLavine.jpg";


const CardGrid = () => {
    // const [cards, setCards] = useState([]);
    const cards = [
        {image: demarDerozan, name: 'Demar Derozan'},
        {image: ericBledsoe, name: 'Eric Bledsoe'},
        {image: goranDragic, name: 'Goran Dragic'},
        {image: joelEmbiid, name: 'Joel Embiid'},
        {image: johnWall , name: 'John Wall'},
        {image: jrueHoliday, name: 'Jrue Holiday'},
        {image: nickYoung, name: 'Nick Young'},
        {image: patrickBeverley, name: 'Patrick Beverley'},
        {image: paulGeorge, name: 'Paul George'},
        {image: tristanThompson, name: 'Tristan Thompson'},
        {image: willBarton, name: 'Will Barton'},
        {image: zachLavine, name: 'Zach Lavine'},
    ]


    

    return (
        <div className="card-grid">
            {cards.map(card => {
                return <Card image={card.image} name={card.name} />
            })}
        </div>
    )
}

export default CardGrid;