import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();
// export const rootReducer = combineReducers({
//   user: UserReducer,
//   app: AppReducer
// });

const composeEnchancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});


const store = createStore(() => {}, composeEnchancers(
  applyMiddleware(sagaMiddleware),
));

//run saga Listeners

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
