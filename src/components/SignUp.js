import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignUp extends Component {
    state = {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        email: "",
        phoneNumber: ""
    }

    handleOnChange = () => {

    };

    handleOnSubmit = event => {
        event.preventDefault();
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
                                                <input className="form-control" type="text" placeholder="First Name" autoFocus="" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="field">
                                            <div className="form-label-group">
                                                <input className="form-control" type="text" placeholder="Last Name" autoFocus="" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="field">
                                            <div className="form-label-group">
                                                <input className="form-control" type="email" placeholder="Email address" autoFocus="" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="field">
                                            <div className="form-label-group">
                                                <input className="form-control" type="text" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <br />                                        
                                        <div className="form-label-group">
                                            <div className="control">
                                                <input className="form-control" type="text" placeholder="Username" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-label-group">
                                            <div className="control">
                                                <input className="form-control" type="password" placeholder="Password" />
                                            </div>
                                        </div>

                                        <hr className="my-4" />

                                        <button className="btn btn-lg btn-info btn-block">Sign Up!</button>
                                    </form>
                                            </div>
                                            <p className="text-center">
                                                <a href="/login">Log In</a> &nbsp;·&nbsp;
                                                <a href="../">Need Help?</a>
                                            </p>
                                        </div>
                                </div>
                        </div>
                    </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(null, mapDispatchToProps)(SignUp);