// React
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Components
import App from './App';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';

// CSS
import 'bulma';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Imported Reducer
import rootReducer from './reducers/index';

// ?
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store} >
        <Router>
            <React.Fragment>
                <NavBar />
                <Route exact path='/' component = {App} />
                <Route exact path='/login' component = {Login} />
                <Route exact path='/signup' component = {SignUp} />
            </React.Fragment>
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
