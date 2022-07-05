import { useEffect, useState } from "react";

export default function Card ({id, shuffleGrid, image, nameOfPlayer, cardClicked, setCardClicked, handleCurrentScore, isCardClicked, handleCardClicked, obj, userId, getIndex, getValue}) {

    // const handleCardClick = (cc) => {
    //     console.log('test');
    //     setCardClicked(cc = true);
    //     // obj.cardClicked = true; 
    //     // console.log(obj.target);
    // }

    function checkIfCardClicked (cardClicked, userId) {
        //filter card clicked and change cardclicked property to TRUE
        let filterCardClicked = cardClicked.filter(card => card[0].id === userId);
        filterCardClicked = filterCardClicked[0];
        filterCardClicked.cardClicked = true;



        console.log(filterCardClicked);
        console.log(cardClicked.map(arr => {
            //return each card object in array
            console.log(arr[0].cardClicked);
            return arr[0];
        }))

        // console.log(cardClicked.filter(arr => arr[1] === false));

        // const filterObj = cardClicked.filter(arr => arr[1] === userId ? arr[0].cardClicked = )
        // userId === cardClicked[1]
    }

    return (
        <li 
            key={id} 
            className="card-container"
            // onClick={handleCardClick}
        >
                <img 
                    className="card" 
                    src={image} 
                    alt={nameOfPlayer}
                    onClick={(e) => {
                        e.preventDefault();
                        // shuffleGrid(getIndex);
                        shuffleGrid();
                        // setCardClicked(true);
                        handleCurrentScore();
                        // handleCardClicked(obj, userId);
                        checkIfCardClicked(cardClicked, userId);
                    }}/>
                <h6>{nameOfPlayer}</h6>
        </li>
    )
}