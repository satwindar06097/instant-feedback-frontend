import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store.js';

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider  store={store}>
    <App />
  </Provider>
)
