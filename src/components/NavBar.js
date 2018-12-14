import React, { Component } from "react";
import Logo from "../imgs/capozio_logo.png";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {

render () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light transparent">
            <img src={Logo} className="logo-height" alt="Capozio's Logo" href="#" />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link" to="/menu">Menu</Link>
                    <div className="nav-item dropdown" href="/">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/">Action</Link>
                                <Link className="dropdown-item" to="/">Another action</Link>
                                <Link className="dropdown-item" to="/">Logout</Link>
                            </div>
                    </div>
                    {this.props.loggedIn ? <Link className="nav-item nav-link" to="/">Checkout</Link> : <Link className="nav-item nav-link" to="/login">Login</Link>}
                    
                </div>
            </div>
        </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(NavBar);