import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

/**
 * Persist state in local storage
 */
const persistedState = localStorage.getItem('fifteenAppState')
  ? JSON.parse(localStorage.getItem('fifteenAppState'))
  : {};
const store = createStore(reducers, persistedState, composeWithDevTools());
store.subscribe(() => {
  let state = store.getState();
  let board = { ...state.board, historyLength: 0 };
  localStorage.setItem('fifteenAppState', JSON.stringify({ board }));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
