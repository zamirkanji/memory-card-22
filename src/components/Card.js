export default function Card (props) {
    return (
        <div className="card-container">
            <img src={props.image} alt={props.name} />
        </div>
    )
}