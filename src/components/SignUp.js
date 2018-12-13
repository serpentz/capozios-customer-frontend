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
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <div className="box">
                                <h3 className="title has-text-grey">Sign Up</h3>
                                <p className="subtitle has-text-grey">All fields required</p>
                                    <form>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="text" placeholder="First Name" autofocus="" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="text" placeholder="Last Name" autofocus="" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="email" placeholder="Email address" autofocus="" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="text" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="text" placeholder="Username" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="password" placeholder="Password" />
                                            </div>
                                        </div>

                                        <button className="button is-block is-info is-large is-fullwidth">Sign Up!</button>
                                    </form>
                                            </div>
                                            <p className="has-text-grey">
                                                <a href="/login">Log In</a> &nbsp;·&nbsp;
                                                <a href="../">Need Help?</a>
                                            </p>
                                        </div>
                        </div>
                    </div>
                </section>
        )
    }

}

const mapDispatchToProps = dispatch => {

};

export default connect(null, mapDispatchToProps)(SignUp);