import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("")