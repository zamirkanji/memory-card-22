import { useState, useEffect } from "react";

export default function Game (props) {

    const [score, setScore] = useState(0);


    const bestScore = () => {
        // if () {

        // }
    }

    const gameOver = () => {
        //setCardisclicked back to false
    }


    return (
        <div className="game-scores-container">
            <span className="game-score-text">Current Score: {score}</span>
            {props.cardClicked === false ? <span className="game-score-text">Best Score: 0</span> : <span className="game-score-text">Best Score: {'placeholder'}</span>}
        </div>
    )
}