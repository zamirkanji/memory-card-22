import { useEffect } from 'react';
import { useState } from 'react';
import './styles/index.css';
import CardGrid from './components/CardGrid';
import Header from './components/Header';
function App() {
  
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <CardGrid />
    </div>
  );
}

export default App;
