import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogin } from '../actions/login';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleOnChange = event => {

    };

    handleOnClick = event => {
        this.props.fetchLogin(this.state);
        this.setState({username: '', password: ''});
    };

    render () {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <div className="box">
                            <h3 className="title has-text-grey">Login</h3>
                            <p className="subtitle has-text-grey">Please login to proceed.</p>
                            {/* Form Start */}
                                    <form>
                                        
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="text" placeholder="Your Username" autofocus="" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="password" placeholder="Your Password" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="checkbox">
                                            <input type="checkbox" />
                                            {` Remember me`} </label>
                                        </div>
                                        <button onClick={this.handleOnClick} className="button is-block is-info is-large is-fullwidth">Login</button>
                                    </form>
                            {/* Form End */}
                                            </div>
                                            <p className="has-text-grey">
                                                <a href="/signup">Sign Up</a> &nbsp;·&nbsp;
                                                <a href="/login">Forgot Password</a> &nbsp;·&nbsp;
                                                <a href="/login">Need Help?</a>
                                            </p>
                                        </div>
        </div>
    </div>
</section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLogin: credentials => dispatch(fetchLogin(credentials))
    }
};

export default connect(null, mapDispatchToProps)(Login);