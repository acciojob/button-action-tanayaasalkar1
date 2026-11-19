import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const [paraClass, setparaClass] = useState("hide");
  function handleParaclass(){
    setparaClass("show")
  }
  return (
    <div className="App" id="main">
      // Do not alter the main div
  
    <p id="para" className={paraClass}>
      Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
    </p>
  <button id="click" onClick={handleParaclass}>
   click me
  
  </button>
    
    </div>
  );
}

export default App
