import Game from "./Game";

export default function Header (props) {
    return (
        <header className="App-header">
            <h1>Memory Game!</h1>
            <p>Try not to click the same picture twice</p>
            <div>
                {<Game currentScore={props.currentScore} bestScore={props.bestScore} />}
                {/* <Game currentScore={props.currentScore} /> */}
            </div>
        </header>
    )
}