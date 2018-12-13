// React
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Components
import App from './App';
import Login from './components/Login';
import SignUp from './components/SignUp';

// CSS
import 'bulma';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Imported Reducer
import capozios from './reducers/index';

const store = createStore(capozios);

ReactDOM.render(
    <Provider store = {store} >
        <Router>
            <React.Fragment>
                <Route exact path='/' component = {App} />
                <Route exact path='/login' component = {Login} />
                <Route exact path='/signup' component = {SignUp} />
            </React.Fragment>
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
