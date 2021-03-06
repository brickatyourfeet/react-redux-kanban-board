import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import './index.css';
import reducers from './reducers'

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'

const store = createStore(reducers)


ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
