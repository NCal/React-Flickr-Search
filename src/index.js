// Libs
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import {persistStore, autoRehydrate} from 'redux-persist';
// CSS 
import './main.scss';

// Components
import App from './containers/app.js';

const store = createStore(
   reducers,
   undefined,
   compose(
      applyMiddleware(),
      autoRehydrate()
   )
);

persistStore(store);

render(
  <Provider store={ store }>
    <App title="App" />
  </Provider>
  , document.getElementById('root'));