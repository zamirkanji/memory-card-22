import { useEffect, useReducer, useState } from "react";

export default function Card ({id, shuffleGrid, image, nameOfPlayer, cardClicked, handleCurrentScore, userId, objClicked, setCardsArr, obj, cardsArr, handleCardClick}) {

    // function handleCardClick (cardClicked, userId) {
    //     //filter card clicked and change cardclicked property to TRUE
    //     let filterCardClicked = cardClicked.filter(card => card[0].id === userId);
    //     filterCardClicked = filterCardClicked[0];

    //     if (filterCardClicked[0].cardClicked === true) {
    //         console.log('game over!');
    //     }
    //     // console.log(filterCardClicked[0]);
    //     filterCardClicked[0].cardClicked = true;
    //     // console.log(filterCardClicked[0]);
    // }

    // useReducer(() => {

    // })

    return (
        <li 
            key={id} 
            className="card-container"
            onClick={(e) => {
                e.preventDefault();
                handleCardClick();
        }}>
            <img 
                className="card" 
                src={image} 
                alt={nameOfPlayer}
            />
            <h6>{nameOfPlayer}</h6>
        </li>
    )
}