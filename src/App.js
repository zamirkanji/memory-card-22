import { useState } from 'react';
import './styles/index.css';
import CardGrid from './components/CardGrid.js';
import Header from './components/Header.js';
import Game from './components/Game';

function App() {

  return (
    <div className="App">
      <Header />
      <CardGrid />
    </div>
  );
}

export default App;