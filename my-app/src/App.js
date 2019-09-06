import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display"
import DashBoard from "./components/Dashboard"



export const testBalls = 4
export const testStrikes = 3;
export const testAddToStrike = () => {
  if (testStrikes < 3 ) {
    return testStrikes + 1
  }

else if (testStrikes > 2 ){
 return (testStrikes - 3);
}
};

export const testAddToBalls = () => {
  if (testBalls < 4 ) {
    return testBalls + 1
  }

else if (testBalls > 2 ){
 return (testBalls - 3);
}
};



function App (){



  
  const [balls, setBalls] = useState(0);
const [strikes, setStrikes] = useState(0);

const addStrike = () => {
if( strikes < 3) {
  setStrikes (strikes + 1)
}
else if ( strikes > 2) {
   setStrikes(strikes - 3);
}
};
 const addBall = () => {
  if( balls < 4) {
    setBalls(balls + 1)
  }
  else if (balls > 3) {
    setBalls(balls - 4);
  }
  };
const addFoul = () => {
    if( strikes < 2) {
      setStrikes(strikes + 1)
    }
    else if (strikes >= 2) {
      setStrikes (strikes + 0);
    }
    };
   const Hit = ()=> {
     setStrikes(0);
     setBalls(0);
    };

  return (
    <div className="App">
      <header className="App-header">
     
           <Display balls={balls} strikes={strikes} />
           <DashBoard  addStrike ={addStrike} addBall ={addBall} addFoul={addFoul} Hit = {Hit} />
           
       
      </header>
    </div>
  );
}

export default App;
