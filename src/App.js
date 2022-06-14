import { useState } from 'react';
import './styles/index.css';
import CardGrid from './components/CardGrid.js';
import Header from './components/Header.js';
import Game from './components/Game';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [cardClicked, setCardClicked]= useState(false);


  const bestScore = () => {
      // if () {

      // }
  }

  const gameOver = () => {
      //setCardisclicked back to false
      setCardClicked(false);
  }

  

  return (
    <div className="App">
      <Header />
      <Game currentScore={currentScore}/>
      <CardGrid cardClicked={cardClicked} setCardClicked={setCardClicked}/>
    </div>
  );
}

export default App;
