import { useEffect, useState } from "react";

export default function Card ({id, shuffleGrid, image, nameOfPlayer, cardClicked, handleCurrentScore, userId}) {

    function handleCardClick (cardClicked, userId) {
        //filter card clicked and change cardclicked property to TRUE
        let filterCardClicked = cardClicked.filter(card => card[0].id === userId);
        filterCardClicked = filterCardClicked[0];
        filterCardClicked.cardClicked = true;

        // console.log(filterCardClicked);
        // console.log(cardClicked.map(arr => {
        //     //return each card object in array
        //     console.log(arr[0].cardClicked);
        //     return arr[0];
        // }))

        // console.log(cardClicked.filter(arr => arr[1] === false));

        // const filterObj = cardClicked.filter(arr => arr[1] === userId ? arr[0].cardClicked = )
        // userId === cardClicked[1]
    }

    return (
        <li 
            key={id} 
            className="card-container"
            onClick={(e) => {
                console.log(e.target);
                e.preventDefault();
                shuffleGrid();
                handleCurrentScore();
                handleCardClick(cardClicked, userId);
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