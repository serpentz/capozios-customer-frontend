import React, { Component } from "react";
import Logo from "../imgs/capozio_logo.png";

export default class NavBar extends Component {

render () {
    return (
        <nav className="navbar background-red is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="http://www.capozios.com" >
            <img src={Logo}  height="50" alt = "capozio's-logo"/>
            </a>

            <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
            
        </div>

        <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
            <a className="navbar-item" href='/'>
                Home
            </a>

            <a className="navbar-item" href='/'>
                Option 1
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href='/'>
                dropdown
                </a>

                <div className="navbar-dropdown">
                <a className="navbar-item" href='/'>
                    About
                </a>
                <a className="navbar-item" href='/'>
                    Options
                </a>
                <a className="navbar-item" href='/'>
                    Contact
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href='/'>
                    Report an issue
                </a>
                </div>
            </div>
            </div>
            {/* From Right */}
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-light" href='/'>
                        Profile
                    </a>
                    <a className="button is-light" href='/login'>
                        Log in
                    </a>
                    </div>
                </div>
            </div>
            {/* End From Right */}
        </div>
        </nav>
        );
    }
}
