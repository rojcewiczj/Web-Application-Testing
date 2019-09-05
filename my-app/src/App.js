import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display"
import DashBoard from "./components/Dashboard"












function App() {const [balls, setBalls] = useState(0);
const [strikes, setStrikes] = useState(0);

const addStrike = () => {
if( strikes < 3) {
  setStrikes (strikes + 1)
}
else if ( strikes > 2) {
   setStrikes(strikes - 3);
}
};
 const addBall () {
  if( currentValue < 4) {
    return currentValue + 1
  }
  else if (currentValue > 3) {
    return currentValue = 0;
  }
  };
const addFoul = currentValue => {
    if( currentValue < 2) {
      return currentValue + 1
    }
    else if (currentValue >= 2) {
      return currentValue + 0;
    }
    };
   const hit = currentValue => {
     return currentValue = 0;
    };

  return (
    <div className="App">
      <header className="App-header">
     
           <Display balls={balls} strikes={strikes} />
           <DashBoard  addStrike ={addStrike} addball ={addBall} addFoul={addFoul} hit = {hit}
           />
       
      </header>
    </div>
  );
}

export default App;
