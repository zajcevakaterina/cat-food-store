import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import cssVars from 'css-vars-ponyfill';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

cssVars({
  rootElement: document
});