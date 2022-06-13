import { useState } from "react";

export default function Card (props) {

    const [cardClicked, setCardClicked]= useState(false);
    const isCardClicked = () => {
        if (!cardClicked) {
            console.log('card is not clicked');
        } else {
            console.log('card is clicked');
        }
    }

    return (  
        <li 
            key={props.id} className="card-container" 
            onClick={props.shuffleGrid}>
                <img 
                    className="card" 
                    src={props.image} 
                    alt={props.nameOfPlayer}/>
                <h6>{props.nameOfPlayer}</h6>
        </li>
    )
}