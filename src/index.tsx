import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import imagesDatabase from './database-local/images'
import imagesDatabaseType from './database-types/images'
import './index.css';

const images:imagesDatabaseType = imagesDatabase

export const Context = React.createContext({images})

ReactDOM.render(
  <React.StrictMode>
      <App Context={Context} images={images}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
