import { useState } from 'react';
import './styles/index.css';
import CardGrid from './components/CardGrid.js';
import Header from './components/Header.js';
import Game from './components/Game';

function App() {

  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Game score={score}/>
      <CardGrid />
    </div>
  );
}

export default App;
