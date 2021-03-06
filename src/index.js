import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store';

ReactDOM.render(

  <Provider store = {Store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
