import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store.jsx';

const hello = <h1>Hello Derrick</h1>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {hello} 
    </Provider>
  </React.StrictMode>
  ,document.getElementById('root'));
