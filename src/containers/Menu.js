import React, { Component } from 'react';
import { fetchItems } from '../actions/items';
import { connect } from 'react-redux';
import Card from '../components/MenuCategoryCard';

class Menu extends Component {

    componentDidMount () {
        if(!this.props.itemsFetched) {
            this.props.fetchItems();
        }
    };

    handleOnClick () {

    };


    renderCard () {

    }


    menuRender () {
        return (
            <React.Fragment>
                {this.props.categories.map(category => <Card name = {category} />)}
            </React.Fragment>
        )
    }

    render () {
        return (
            <div className = "card-columns">
                {this.props.itemsFetched ? this.menuRender() : null}
            </div>
        )
    };
}

const mapStateToProps = state => {
    if (state.items.itemsFetched) { 
        let categoryArray = state.items.items.map(cat => cat.name)
        console.log(categoryArray)
        return {
            categories: categoryArray,
            itemsFetched: state.items.itemsFetched
        }
    } else { return {}}
}


export default connect(mapStateToProps, { fetchItems })(Menu);