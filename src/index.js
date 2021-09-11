import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import {Provider} from "react-redux";



// const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
// }
// renderEntireTree(store.getState())
// store.subscribe(() => {
//   let state = store.getState()
//   renderEntireTree(state)
// })

reportWebVitals();
