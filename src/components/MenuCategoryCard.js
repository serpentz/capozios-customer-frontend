import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class MenuCategoryCard extends Component {

    state = {
        redirect: false
    }

    handleOnclick = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        return (
            <div className="card text-center" style={{width: "18rem"}} onClick={this.handleOnclick} >
                {this.state.redirect ? <Redirect to={`/menu/${this.props.name}`} /> : null }
                <img className="card-img-top" height="250px" src={`https://s3.amazonaws.com/ignaciosbucket/${this.props.name}.jpg`} alt={this.props.name} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name[0].toUpperCase() + this.props.name.slice(1)}</h5>
                </div>
            </div>
        )
    }
}

export default MenuCategoryCard