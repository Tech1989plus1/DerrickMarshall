import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './store.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>Hello</h1>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
