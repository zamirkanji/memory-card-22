import { useState } from "react";

export default function Card (props) {

    const [cardClicked, setCardClicked]= useState(false);

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