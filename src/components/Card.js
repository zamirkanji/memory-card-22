import { useEffect, useState } from "react";

export default function Card ({id, shuffleGrid, image, nameOfPlayer, cardClicked, handleCurrentScore, userId, objClicked, setCardsArr, obj, cardsArr}) {

    function handleCardClick (cardClicked, userId) {
        // console.log(obj);
        console.log('handle card click');

        //filter card clicked and change cardclicked property to TRUE
        let filterCardClicked = cardClicked.filter(card => card[0].id === userId);
        filterCardClicked = filterCardClicked[0];

        if (filterCardClicked[0].cardClicked === true) {
            console.log('game over!');
        }

        // filterCardClicked[0].cardClicked === true ? console.log('game over!') : null

        console.log(filterCardClicked[0]);
        filterCardClicked[0].cardClicked = true;
        console.log(filterCardClicked[0]);


        // setCardsArr(obj.cardClicked = true);
        // setCardsArr(cardsArr.filter(card => card[0].id === obj.id))
        // console.log(card);



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

    // useEffect(() => {
    //     filterCardClicked
    // },[])

    return (
        <li 
            key={id} 
            className="card-container"
            onClick={(e) => {
                e.preventDefault();
                console.log(e.target);
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