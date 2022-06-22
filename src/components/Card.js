import { useEffect, useState } from "react";

export default function Card ({id, shuffleGrid, image, nameOfPlayer, cardClicked, setCardClicked, handleCurrentScore, isCardClicked, handleCardClicked}) {

    useEffect(() => {
            if (!cardClicked) {
                console.log('card is not clicked');
            } else {
                console.log('card is clicked');
            }
    }, [cardClicked])

    return (  
        <li 
            key={id} 
            className="card-container"
        >
                <img 
                    className="card" 
                    src={image} 
                    alt={nameOfPlayer}
                    onClick={(e) => {
                        e.preventDefault();
                        shuffleGrid();
                        handleCurrentScore();
                        setCardClicked(true);
                        handleCardClicked(isCardClicked);
                    }}/>
                <h6>{nameOfPlayer}</h6>
        </li>
    )
}