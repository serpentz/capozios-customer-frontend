import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchItems } from '../actions/items';

class Category extends Component {
    constructor () {
        super();
        this.state = {};
    }

    componentDidMount() {
        if(!this.props.itemsFetched) {
            this.props.fetchItems();
        }
    }

    render() {
        return (
            <div>
                This is the {this.state.category} container
            </div>
        )
    }
}

const mapStateToProps = (state, props)=> {
    if (state.items.itemsFetched) {
        let categoryFromProps = props.match.params.name;
        return {
            category: categoryFromProps,
            itemsFetched: state.items.itemsFetched,
            items: state.items.items.filter(category => category.name === categoryFromProps)
        }
    } else { return {}}
}
const mapDispatchToprops = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Category);