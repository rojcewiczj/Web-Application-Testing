import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

import { strikes, setStrikes, balls, setBalls , addStrike, addBall, addFoul, Hit} from './App';
  





it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Dashboard is working', () => {
  const div = document.createElement('div');
 ReactDOM.render(<Dashboard />, div);
})

