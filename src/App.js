import React from 'react';
import './App.css';
import backgroundImage from './background.jpg'; // Assuming you've placed your image in the src directory

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <h1>Flakarika's Professional Services</h1>
      {/*... your other content ...*/}
      <p>
        Telegram: <a href="https://t.me/Flakarika" target="_blank" rel="noreferrer">https://t.me/Flakarika</a><br/>
        Discord: <a href="https://flakapeerme.io" target="_blank" rel="noreferrer">flakapeerme.io</a><br/>
        Twitter: <a href="https://x.com/genulemny" target="_blank" rel="noreferrer">https://x.com/genulemny</a>
      </p>
    </div>
  );
}

export default App;
