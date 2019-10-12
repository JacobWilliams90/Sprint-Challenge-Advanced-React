import React from 'react';
import './App.css';
import PlayerData from './Components/PlayerData';
import DarkMode from './Components/DarkMode';

function App() {
  return (
    <div className="App">
      <DarkMode />
      <PlayerData />
    </div>
  );
}

export default App;
