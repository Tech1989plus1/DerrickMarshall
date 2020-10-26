import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import App from './components/App.jsx'

const element = <h1>Hello, world</h1>
ReactDOM.render(element, document.getElementById('root'));
