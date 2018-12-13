import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogin } from '../actions/login';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    };

    handleOnClick = event => {
        event.preventDefault();
        this.props.fetchLogin(this.state);
        // this.setState({username: '', password: ''});
    };

    render () {
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h3 className="card-title text-center">Sign In</h3>
                    <br />
                    <form className="form-signin">
                      <div className="form-label-group">
                        <input type="text" 
                        id="inputEmail"
                        name="username"
                        onChange={this.handleOnChange}
                        className="form-control" 
                        placeholder="Username" 
                        required autoFocus />
                      </div>
                      <br />
                      <div className="form-label-group">
                        <input type="password"
                        id="inputPassword"
                        name="password"
                        onChange={this.handleOnChange}
                        className="form-control"
                        placeholder="Password"
                        required />
                      </div>
                      <br />
                      <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                      </div>
                      <button className="btn btn-lg btn-info btn-block" onClick={this.handleOnClick} type="submit">Sign In</button>
                      <hr className="my-4" />
                      {/* <button className="btn btn-lg btn-primary btn-block" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
                    </form>
                      <a className="btn btn-lg btn-info btn-block" href="/signup">Sign Up!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLogin: credentials => dispatch(fetchLogin(credentials))
    }
};

const mapStateToProps = state =>{
  return {
    // maybe state.auth.loggedIn
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);