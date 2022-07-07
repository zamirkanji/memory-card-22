import { useState, useEffect } from "react";

export default function Game ({currentScore, cardClicked}) {

//game functions 
    // const bestScore = () => {

    // }

    // const gameOver = () => {
    //   setCardClicked(false);
    // }

    //handle functions
    const handleCurrentScore = () => {
        // setCurrentScore(s => s + 1); 
    }

    return (
        <div className="game-scores-container">
            <span className="game-score-text">Current Score: {currentScore}</span>
            {cardClicked === false ? <span className="game-score-text">Best Score: 0</span> : <span className="game-score-text">Best Score: {'placeholder'}</span>}
        </div>
    )
}