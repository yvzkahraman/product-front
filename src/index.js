import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootswatch/dist/united/bootstrap.min.css';
import App2 from './App';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import store from './stores/ReduxStore';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>


    <AppRouter />
    {/* Func - Stateless Func - Class  */}


  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
