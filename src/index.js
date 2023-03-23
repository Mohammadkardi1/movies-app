import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import {allReducersStore} from './Redux/Store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={allReducersStore}>
    <App />
  </Provider>
);


