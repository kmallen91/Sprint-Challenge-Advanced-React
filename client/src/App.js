import React from 'react';
import './App.css';
import PlayerList from "./components/playerList.js"
import useDarkMode from './hooks/useDarkMode.js'




function App() {
const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
    <h1> Top Searched Female Footballers </h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        > Dark Mode 
        </div>
      </div>
        <PlayerList />
      
    </div>
  );
}

export default App;
