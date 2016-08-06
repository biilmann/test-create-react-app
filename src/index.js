import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "file?name=_redirects!./_redirects";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
