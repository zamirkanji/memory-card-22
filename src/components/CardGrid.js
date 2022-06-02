import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import demarDerozan from "../images/demarDerozan.png";
import ericBledsoe from "../images/ericBledsoe.png";
import goranDragic from "../images/goranDragic.png";
import joelEmbiid from "../images/joelEmbiid.png";
import johnWall from "../images/johnWall.png";
import jrueHoliday from "../images/jrueHoliday.png";
import nickYoung from "../images/nickYoung.png";
import patrickBeverley from "../images/patrickBeverley.png";
import paulGeorge from "../images/paulGeorge.png";
import tristanThompson from "../images/tristanThompson.png";
import willBarton from "../images/willBarton.png";
import zachLavine from "../images/zachLavine.png";


const CardGrid = () => {
    const [key, setKey] = useState(0);
    const [cards, setCards] = useState([
        {image: demarDerozan, name: 'Demar Derozan', id: 0},
        {image: ericBledsoe, name: 'Eric Bledsoe', id: 1},
        {image: goranDragic, name: 'Goran Dragic', id: 2},
        {image: joelEmbiid, name: 'Joel Embiid', id: 3},
        {image: johnWall , name: 'John Wall', id: 4},
        {image: jrueHoliday, name: 'Jrue Holiday', id: 5},
        {image: nickYoung, name: 'Nick Young', id: 6},
        {image: patrickBeverley, name: 'Patrick Beverley', id: 7},
        {image: paulGeorge, name: 'Paul George', id: 8},
        {image: tristanThompson, name: 'Tristan Thompson', id: 9},
        {image: willBarton, name: 'Will Barton', id: 10},
        {image: zachLavine, name: 'Zach Lavine', id: 11},
    ]);
    // const cards = [
    //     {image: demarDerozan, name: 'Demar Derozan'},
    //     {image: ericBledsoe, name: 'Eric Bledsoe'},
    //     {image: goranDragic, name: 'Goran Dragic'},
    //     {image: joelEmbiid, name: 'Joel Embiid'},
    //     {image: johnWall , name: 'John Wall'},
    //     {image: jrueHoliday, name: 'Jrue Holiday'},
    //     {image: nickYoung, name: 'Nick Young'},
    //     {image: patrickBeverley, name: 'Patrick Beverley'},
    //     {image: paulGeorge, name: 'Paul George'},
    //     {image: tristanThompson, name: 'Tristan Thompson'},
    //     {image: willBarton, name: 'Will Barton'},
    //     {image: zachLavine, name: 'Zach Lavine'},
    // ]

    const shuffleGrid = () => {
        console.log('shuffleGrid');
        setCards(cards.sort(() => Math.random() - 0.5));
        // const shuffledCards = cards.sort(() => Math.random() - 0.5);
        // return shuffledCards;
    }

    return (
        <div className="card-grid">
            {cards.map(card => {
                return <Card image={card.image} name={card.name} key={card.id} shuffledGrid={shuffleGrid}/>
            })}
        </div>
    )
}

export default CardGrid;