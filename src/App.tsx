import React from "react";
import logo from "./logo192.png";
import "./App.css";

const App: React.FC = () => {
  const handleAppLaunch = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    window.location.href = "https://app.bananacrystal.com";
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Banana Crystal</h1>
        <button className="App-button" onClick={handleAppLaunch}>
          Launch App
        </button>
      </header>
    </div>
  );
};

export default App;
