import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions/login';

class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        phoneNumber: ""
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleOnSubmit = event => {
        event.preventDefault();
    };


    // Handles phone number for better user experience
    handlePhoneNumberChange = event => {
        let value = event.target.value;
        value = value.replace(/[^0-9]+/g, '');
        if (value[0] === "1") {value = value.slice(1)}
        if (value.length <= 3) {
                value = `+1 (${value})`
                this.setState({phoneNumber: value})
        } else if (value.length > 3 && value.length < 7) {
            value = `+1 (${value.slice(0,3)}) ${value.slice(3, value.length + 1)}`
            this.setState({phoneNumber: value})
        } else {
            value = `+1 (${value.slice(0,3)}) ${value.slice(3, 6)}-${value.slice(6, value.length + 1)}`
            if (value.length > 17) {value = value.slice(0,17)}
            this.setState({phoneNumber: value})
        }
    };

    render () {
        return  (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                <h3 className="card-title text-center">Sign Up</h3>
                                    <p className="text-center">All fields required</p>
                                    <form className="form-signin">
                                        <div className="field">
                                            <div className="form-label-group">
                                                <input className="form-control" 
                                                name="firstName"
                                                value={this.state.firstName}
                                                onChange={this.handleOnChange}
                                                type="text" 
                                                placeholder="First Name" 
                                                autoFocus="" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="field">
                                            <div className="form-label-group">
                                                <input className="form-control" 
                                                name="lastName"
                                                value={this.state.lastName}
                                                onChange={this.handleOnChange}
                                                type="text" 
                                                placeholder="Last Name" 
                                                autoFocus="" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="field">
                                            <div className="form-label-group">
                                                <input className="form-control" 
                                                name="email"
                                                onChange={this.handleOnChange}
                                                value={this.state.email}
                                                type="email" 
                                                placeholder="Email address" 
                                                autoFocus="" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="field">
                                            <div className="form-label-group">
                                                <input className="form-control" 
                                                name="phoneNumber"
                                                onChange={this.handlePhoneNumberChange}
                                                value={this.state.phoneNumber}
                                                type="tel" 
                                                placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <br />                                        
                                        <div className="form-label-group">
                                            <div className="control">
                                                <input className="form-control" 
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.handleOnChange}
                                                type="text" 
                                                placeholder="Username" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-label-group">
                                            <div className="control">
                                                <input className="form-control"
                                                name="password"
                                                onChange={this.handleOnChange}
                                                value={this.state.password}
                                                type="password" 
                                                placeholder="Password" />
                                            </div>
                                        </div>

                                        <hr className="my-4" />

                                        <button className="btn btn-lg btn-info btn-block">Sign Up!</button>
                                    </form>
                                            </div>
                                            <p className="text-center">
                                                <Link to="/login">Log In</Link> &nbsp;·&nbsp;
                                                <Link to="/singup">Need Help?</Link>
                                            </p>
                                        </div>
                                </div>
                        </div>
                    </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createUser: user => dispatch(createUser(user))
    }
};

export default connect(null, mapDispatchToProps)(SignUp);