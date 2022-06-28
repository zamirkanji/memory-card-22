import { useEffect, useState } from "react";

export default function Card ({id, shuffleGrid, image, nameOfPlayer, cardClicked, setCardClicked, handleCurrentScore, isCardClicked, handleCardClicked}) {

    // useEffect(() => {
    //         if (!cardClicked) {
    //             console.log('card is not clicked');
    //         } else {
    //             console.log('card is clicked');
    //         }
    // }, [cardClicked])
    // console.log(cardClicked);

    const handleCardClick = (e, k) => {
        console.log(e.target);
        console.log(k);
    }

    return (  
        <li 
            key={id} 
            className="card-container"
            onClick={handleCardClick}
        >
                <img 
                    className="card" 
                    src={image} 
                    alt={nameOfPlayer}
                    onClick={(e) => {
                        console.log(e.target);
                        e.preventDefault();
                        shuffleGrid();
                        // setCardClicked(true);
                        handleCurrentScore();
                        handleCardClicked(isCardClicked);
                    }}/>
                <h6>{nameOfPlayer}</h6>
        </li>
    )
}