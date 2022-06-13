import Card from './Card';
import { useState, useEffect } from 'react';
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


export default function CardGrid() {
    const cardsArr = [
        {image: demarDerozan, nameOfPlayer: 'Demar Derozan', id: 0},
        {image: ericBledsoe, nameOfPlayer: 'Eric Bledsoe', id: 1},
        {image: goranDragic, nameOfPlayer: 'Goran Dragic', id: 2},
        {image: joelEmbiid, nameOfPlayer: 'Joel Embiid', id: 3},
        {image: johnWall , nameOfPlayer: 'John Wall', id: 4},
        {image: jrueHoliday, nameOfPlayer: 'Jrue Holiday', id: 5},
        {image: nickYoung, nameOfPlayer: 'Nick Young', id: 6},
        {image: patrickBeverley, nameOfPlayer: 'Patrick Beverley', id: 7},
        {image: paulGeorge, nameOfPlayer: 'Paul George', id: 8},
        {image: tristanThompson, nameOfPlayer: 'Tristan Thompson', id: 9},
        {image: willBarton, nameOfPlayer: 'Will Barton', id: 10},
        {image: zachLavine, nameOfPlayer: 'Zach Lavine', id: 11},
    ]

    const [cards, setCards] = useState(cardsArr.map((value, index) => index));
    console.log(cards);
    
    const randomizePosition = () => {
        const randomizeNumber = Math.floor(Math.random() - 0.5);
        return randomizeNumber;
    }
    
    const shuffleGrid = () => {
        console.log('shuffleGrid');
        setCards(cards.sort(() => randomizePosition()));
        // const shuffledCards = cards.sort(() => Math.random() - 0.5);
        // return shuffledCards;
    }

    // const listItems = cards.map((position) => {
    //     return (
    //         <li key={cardsArr[position].id} className="card-container" onClick={shuffleGrid}>
    //                 <img className="card" src={cardsArr[position].image} alt={cardsArr[position].nameOfPlayer}/>
    //                 <h6>{cardsArr[position].nameOfPlayer}</h6>
    //         </li>
    //     )    
    // })

    return (  
        <ul>
            {cards.map((position) => {
                return (
                    // <li key={cardsArr[position].id} className="card-container" onClick={shuffleGrid}>
                    //     <img className="card" src={cardsArr[position].image} alt={cardsArr[position].nameOfPlayer}/>
                    //     <h6>{cardsArr[position].nameOfPlayer}</h6>
                    // </li>
                    <Card 
                        key={cardsArr[position].id} 
                        onClick={shuffleGrid}
                        image={cardsArr[position].image} 
                        nameOfPlayer={cardsArr[position].nameOfPlayer}
                    />
                )   
            })}
        </ul>
    )
}


// const CardGrid = () => {
//     return (
//         <div className="card-grid">
//             <CreateListItems />
//         </div>
//     )
// }

// export default CardGrid;