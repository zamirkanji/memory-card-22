import './styles/index.css';
import CardGrid from './components/CardGrid.js';
import Header from './components/Header.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <CardGrid />
    </div>
  );
}