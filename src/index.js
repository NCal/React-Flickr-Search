// Libs
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// CSS 
import './main.scss';

// Components
import App from './containers/app.js';
const createStoreWithMiddleware = applyMiddleware()(createStore);


render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App title="App" />
  </Provider>
  , document.getElementById('root'));