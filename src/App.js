import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import CardGrid from './components/CardGrid';
import Header from './components/Header';
function App() {

  const [status, setStatus] = useState('success');

  // const fetchImages = async () => {
  //   let response = await fetch('https://api.thecatapi.com/v1/images/search');
  //       response = await response.json();
  //       console.log(response);
  //       console.log(status);
  //       return response;
  // };

  // useEffect (() => {
  //   return async function getImage (id) {
  //     try {
  //       await fetchImages();
  //     } catch (error) {
  //         console.log(error);
  //         console.log(setStatus('error'));
  //       } 
  //     }
  //   // return getImage();
  // }, []);


  return (
    <div className="App">
      <Header />
      <CardGrid />
    </div>
  );
}

export default App;
