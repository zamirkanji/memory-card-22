import Card from './Card';
import Game from './Game';
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
    const [currentScore, setCurrentScore] = useState(0);
    const [cardClicked, setCardClicked]= useState(false);


    const bestScore = () => {
      // if () {

      // }
    }

    const gameOver = () => {
      //setCardisclicked back to false
      setCardClicked(false);
    }

    const handleCurrentScore = () => {
        setCurrentScore(currentScore + 1);
    }
    
    const randomizePosition = (cards) => {
        console.log(cards);
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards
    }
    
    const shuffleGrid = () => {
        setCards(randomizePosition(cards));
        // console.log(cards);
    }

    useEffect(() => {
        console.log('cards are shuffled')
    }, [setCards]);

    return (
        <>
            <Game currentScore={currentScore}/>
            <ul>
                {cards.map((position) => {
                    return (
                        <Card 
                            key={cardsArr[position].id} 
                            shuffleGrid={shuffleGrid}
                            image={cardsArr[position].image} 
                            nameOfPlayer={cardsArr[position].nameOfPlayer}
                            cardClicked={cardClicked}
                            setCardClicked={setCardClicked}
                            handleCurrentScore={handleCurrentScore}
                        />
                    )   
                })}
            </ul>
        </>  
    )
}