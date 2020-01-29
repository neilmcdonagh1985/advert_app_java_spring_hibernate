import React, { Component, Fragment } from 'react';
import FilteredAdvertList from './FilteredAdvertList'

class SearchBySeller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sellersAdverts: []
        }
        this.handleSelectedSellersAdverts = this.handleSelectedSellersAdverts.bind(this);
    }

    handleSelectedSellersAdverts(value) {
        console.log(value);
        fetch(`http://localhost:8080/sellers/${value}/adverts`)
            .then(response => response.json())
            .then(jsonData => {
                this.setState({ sellersAdverts: jsonData['_embedded'].adverts })
            });
    }

    render() {
        const sellersAdverts = this.state.sellersAdverts;
        let filteredAdvertList;

        if (sellersAdverts) {
            filteredAdvertList = <FilteredAdvertList adverts={this.state.sellersAdverts} />
        }

        return (
            <Fragment>
                <select onChange={(event) => this.handleSelectedSellersAdverts(event.target.value)}>
                    {this.props.sellers.map((seller, index) =>
                    <option key={index} value={seller.id}>{seller.name}</option>)}   
                </select>
                <button onClick={this.props.handleReturnToOptions}>
                    Return to Options
                </button>
                    { filteredAdvertList }  
            </Fragment>
        )   
    }




}



export default SearchBySeller;

