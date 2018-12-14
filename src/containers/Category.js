import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchItems } from '../actions/items';
import Card from '../components/MenuItemCard';

class Category extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if(!this.props.itemsFetched) {
            this.props.fetchItems();
        }
    }

    renderItems = () => {
        return (
            <div className = "card-columns">
                {this.props.items[0].items.map(item => <Card item={item} key={item.id} />)}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.itemsFetched ? this.renderItems() : null}
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