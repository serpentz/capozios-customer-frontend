import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bulma';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import capozios from './reducers/index';

const store = createStore(capozios);

ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
