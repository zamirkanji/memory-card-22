export default function Card ({id, image, nameOfPlayer, handleCardClick}) {
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