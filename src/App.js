import React from 'react';
import './App.css';
import Banner from './Compornets/Banner/Banner';
import Navbar from './Compornets/Navbar/Navbar';
import Rowpost from './Compornets/Rowpost/Rowpost';


function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Banner/>
      <Rowpost/>
    </div>
  );
}

export default App;
