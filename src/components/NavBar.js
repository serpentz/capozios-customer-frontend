import React, { Component } from "react";
import Logo from "../imgs/capozio_logo.png";

export default class NavBar extends Component {

render () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light transparent">
            <img src={Logo} className="logo-height" alt="Capozio's Logo" href="#" />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="/">Menu</a>
                    <div className="nav-item dropdown" href="/">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Logout</a>
                            </div>
                    </div>
                    <a className="nav-item nav-link" href="/login">Login</a>
                </div>
            </div>
        </nav>
        );
    }
}
