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
    const [cards, setCards] = useState([
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
                return <Card image={card.image} name={card.name} shuffledGrid={shuffleGrid}/>
            })}
        </div>
    )
}

export default CardGrid;