import { useEffect, useState } from "react";

export default function Card ({id, shuffleGrid, image, nameOfPlayer}) {
    // console.log(props);

    const [cardClicked, setCardClicked]= useState(false);

    
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
                        setCardClicked(true);
                    }}/>
                <h6>{nameOfPlayer}</h6>
        </li>
    )
}