import React, {useState} from 'react';
import '../styles/App.css';

const App = () => {
  const [isRed, setIsRed] = useState(true);

  const handleButtonClick = () => {
    setIsRed(!isRed);
  }

  return (
    <div id="main">
      <p className={isRed ? "redColor" : "blueColor"}>Newton School</p>
      <button id='button' onClick={handleButtonClick}>Change Style</button>
    </div>
  )
}

export default App;
