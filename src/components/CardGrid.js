import Card from './Card';
import Game from './Game';
import Header from './Header';
import { useState, useEffect, useReducer } from 'react';
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
    
    const [cardsArr, setCardsArr] = useState([
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
    // const [state, dispatch] = useReducer(reducer, {currentScore: 0, bestScore: 0, cardClicked: cardsArr.map((value, index) => [value, index])});

    const [cards, setCards] = useState(cardsArr.map((value, index) => index));
    const [cardClicked, setCardClicked] = useState(cardsArr.map((value, index) => [value, index]));
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case 'GAMEOVER': 
    //             return {currentScore: state.currentScore = 0, bestScore: state.bestScore = currentScore}
    //         case 'INCREMENT':
    //             return {currentScore: state.currentScore + 1}
    //         default: 
    //             return state
    //     }
    // }
    
    //game functions 
    
    const handleBestScore = (currentScore) => {
        setBestScore(currentScore)
    }
    
    const gameOver = () => {
        handleBestScore(currentScore);
        setCurrentScore(0);
        return (
            <Header bestScore={bestScore}/>
        )
    }

    function handleCardClick (cardClicked, userId) {
        shuffleGrid();
        handleCurrentScore();

        let filterCardClicked = cardClicked.filter(card => card[0].id === userId);
        filterCardClicked = filterCardClicked[0];

        if (filterCardClicked[0].cardClicked === true) {
            gameOver();
        } else {
            filterCardClicked[0].cardClicked = true;
        }
        

    }

    const handleCurrentScore = () => {
        // dispatch({type: 'INCREMENT'});
        setCurrentScore(s => s + 1); 
    }
    
    const randomizePosition = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards
    }
    
    const shuffleGrid = () => {
        setCards(randomizePosition(cards));
    }

    return (
        <>
            <Header currentScore={currentScore} bestScore={bestScore}/>
            {/* <Game currentScore={currentScore} bestScore={bestScore}/> */}
            <ul className='card-grid'>
                {cards.map(position => {
                    return (
                        <Card 
                            key={cardsArr[position].id} 
                            userId={cardsArr[position].id}
                            image={cardsArr[position].image} 
                            nameOfPlayer={cardsArr[position].nameOfPlayer}
                            handleCardClick={() => handleCardClick(cardClicked, cardsArr[position].id)}
                        />
                    )   
                })}
            </ul>
        </>  
    )
}