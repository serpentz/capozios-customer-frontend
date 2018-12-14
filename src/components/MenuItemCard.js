import React, { Component } from 'react';
import { connect } from "react-redux";
import { addItemToOrder } from '../actions/orders';

class Item extends Component {

    handleOnClick = () => {
        this.props.addItemToOrder(this.props.item.id)
    }

    render () {
        return (
                <div className="card text-center" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://s3.amazonaws.com/ignaciosbucket/appetizer.jpg" alt={this.props.item.name} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.name}</h5>
                        <p className="card-text">{this.props.item.description}</p>
                        <button onClick={this.handleOnClick} className="btn btn-info">Order</button>
                    </div>
                </div>
        )
    }

};

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        addItemToOrder: id => dispatch(addItemToOrder(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)