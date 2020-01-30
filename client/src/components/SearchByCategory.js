import React, { Component, Fragment } from 'react';
import FilteredAdvertList from './FilteredAdvertList';

class SearchByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorysAdverts: []

        }
        this.handleSelectedCategorysAdverts = this.handleSelectedCategorysAdverts.bind(this);
    }

    handleSelectedCategorysAdverts(value) {
        console.log(value);
        fetch(`http://localhost:8080/categories/${value}/adverts`)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({ categorysAdverts: jsonData['_embedded'].adverts })
        });
    }

    render() {
        const categorysAdverts = this.state.categorysAdverts;
        let filteredAdvertList;

        if (categorysAdverts) {
            filteredAdvertList = <FilteredAdvertList adverts={this.state.categorysAdverts}/>


        }

        return (
            <Fragment>
                <div>
                <select onChange={(event) => this.handleSelectedCategorysAdverts(event.target.value)}>
                    {this.props.categories.map((category, index) =>
                    <option key={index} value={category.id}>{category.categoryName}</option>)}   
                </select>
                </div>
                <div>
                <button onClick={this.props.handleReturnToOptions}>
                    Return to Options
                </button>
                </div>
                    { filteredAdvertList }  
            </Fragment>
        )   

    }

    
}

export default SearchByCategory;

