export default function Card ({image, name, shuffleGrid}) {
    console.log(image, name);
    return (
        <div className="card-container">
            <img className="card" src={image} alt={name} onClick={shuffleGrid} />
            <h6>{name}</h6>
        </div>
    )
}