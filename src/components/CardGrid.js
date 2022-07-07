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
import demarcusCousins from "../images/demarcusCousins.png";
import dwyaneWade from "../images/dwyaneWade.png";
import emmanuelMudiay from "../images/emmanuelMudiay.png";
import javaleMcGee from "../images/javaleMcGee.png";
import pattyMills from "../images/pattyMills.png";
import paulPierce from "../images/paulPierce.png";


export default function CardGrid() {
    //array with all cards/data
    // const cardsArr = [
    //     {image: demarDerozan, nameOfPlayer: 'Demar Derozan', id: 0, cardClicked: false},
    //     {image: ericBledsoe, nameOfPlayer: 'Eric Bledsoe', id: 1, cardClicked: false},
    //     {image: goranDragic, nameOfPlayer: 'Goran Dragic', id: 2, cardClicked: false},
    //     {image: joelEmbiid, nameOfPlayer: 'Joel Embiid', id: 3, cardClicked: false},
    //     {image: johnWall , nameOfPlayer: 'John Wall', id: 4, cardClicked: false},
    //     {image: jrueHoliday, nameOfPlayer: 'Jrue Holiday', id: 5, cardClicked: false},
    //     {image: nickYoung, nameOfPlayer: 'Nick Young', id: 6, cardClicked: false},
    //     {image: patrickBeverley, nameOfPlayer: 'Patrick Beverley', id: 7, cardClicked: false},
    //     {image: paulGeorge, nameOfPlayer: 'Paul George', id: 8, cardClicked: false},
    //     {image: tristanThompson, nameOfPlayer: 'Tristan Thompson', id: 9, cardClicked: false},
    //     {image: willBarton, nameOfPlayer: 'Will Barton', id: 10, cardClicked: false},
    //     {image: zachLavine, nameOfPlayer: 'Zach Lavine', id: 11, cardClicked: false},
    //     {image: demarcusCousins, nameOfPlayer: 'Demarcus Cousins', id: 12, cardClicked: false},
    //     {image: emmanuelMudiay, nameOfPlayer: 'Emmanuel Mudiay', id: 13, cardClicked: false},
    //     {image: javaleMcGee, nameOfPlayer: 'Javale McGee', id: 14, cardClicked: false},
    //     {image: dwyaneWade, nameOfPlayer: 'Dwyane Wade', id: 15, cardClicked: false},
    //     {image: pattyMills, nameOfPlayer: 'Patty Mills', id: 16, cardClicked: false},
    //     {image: paulPierce, nameOfPlayer: 'Paul Pierce', id: 17, cardClicked: false},
    // ]

    const [cardsArr, serCardsArr] = useState([
        {image: demarDerozan, nameOfPlayer: 'Demar Derozan', id: 0, cardClicked: false},
        {image: ericBledsoe, nameOfPlayer: 'Eric Bledsoe', id: 1, cardClicked: false},
        {image: goranDragic, nameOfPlayer: 'Goran Dragic', id: 2, cardClicked: false},
        {image: joelEmbiid, nameOfPlayer: 'Joel Embiid', id: 3, cardClicked: false},
        {image: johnWall , nameOfPlayer: 'John Wall', id: 4, cardClicked: false},
        {image: jrueHoliday, nameOfPlayer: 'Jrue Holiday', id: 5, cardClicked: false},
        {image: nickYoung, nameOfPlayer: 'Nick Young', id: 6, cardClicked: false},
        {image: patrickBeverley, nameOfPlayer: 'Patrick Beverley', id: 7, cardClicked: false},
        {image: paulGeorge, nameOfPlayer: 'Paul George', id: 8, cardClicked: false},
        {image: tristanThompson, nameOfPlayer: 'Tristan Thompson', id: 9, cardClicked: false},
        {image: willBarton, nameOfPlayer: 'Will Barton', id: 10, cardClicked: false},
        {image: zachLavine, nameOfPlayer: 'Zach Lavine', id: 11, cardClicked: false},
        {image: demarcusCousins, nameOfPlayer: 'Demarcus Cousins', id: 12, cardClicked: false},
        {image: emmanuelMudiay, nameOfPlayer: 'Emmanuel Mudiay', id: 13, cardClicked: false},
        {image: javaleMcGee, nameOfPlayer: 'Javale McGee', id: 14, cardClicked: false},
        {image: dwyaneWade, nameOfPlayer: 'Dwyane Wade', id: 15, cardClicked: false},
        {image: pattyMills, nameOfPlayer: 'Patty Mills', id: 16, cardClicked: false},
        {image: paulPierce, nameOfPlayer: 'Paul Pierce', id: 17, cardClicked: false},
    ])

    //useState hooks
    const [cards, setCards] = useState(cardsArr.map((value, index) => index));
    const [cardClicked, setCardClicked] = useState(cardsArr.map((value, index) => [value, index]));
    const [currentScore, setCurrentScore] = useState(0);

    //game functions 
    const bestScore = () => {

    }

    // const gameOver = () => {
    //   setCardClicked(false);
    // }

    //handle functions
    const handleCurrentScore = () => {
        setCurrentScore(s => s + 1); 
    }
    
    const randomizePosition = (cards) => {
        //need to figure out how to replace cards[1]
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards
    }
    
    const shuffleGrid = () => {
        // console.log(cards.map(card => card[1]));
        // console.log(cards);
        // console.log(setCards);
        // setCards((v, i) => [v , randomizePosition(getIndex())]);
        // setCards(randomizePosition(getIndex()));
        setCards(randomizePosition(cards));
    }

    const getIndex = () => {
        const index = cards.map(arr => arr[1]);
        console.log(index);
        return index;
    }

    const getValue = () => {
        const value = cards.map(arr => arr[0]);
        console.log(value);
        return value;
    }

    const filterByNumber = (card) => {
        console.log(card[1]);
        return typeof (card) === 'number' ? true : false;
    }

    // useEffect(() => {
    //     // console.log('cards are shuffled');
    //     if (cardClicked === true) {
    //         console.log("Game over");
    //     }
    // }, [cardClicked]);

    return (
        <>
            <Game currentScore={currentScore} bestScore={bestScore}/>
            <ul className='card-grid'>
                {/* {cards.map(card => card[1]).map(position => { */}
                {cards.map(position => {
                    // console.log(position);
                    return (
                        <Card 
                            key={cardsArr[position].id} 
                            userId={cardsArr[position].id}
                            image={cardsArr[position].image} 
                            nameOfPlayer={cardsArr[position].nameOfPlayer}
                            shuffleGrid={shuffleGrid}
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