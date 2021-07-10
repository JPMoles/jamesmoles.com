import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Test } from './App';
import { Hello, WelcomeBoard } from './Hello';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Hello name='Trance' />,
  document.getElementById('hello-world')
);

ReactDOM.render(
  <Test />,
  document.getElementById('test')
);

ReactDOM.render(
  <WelcomeBoard />,
  document.getElementById('welcomeboard')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
