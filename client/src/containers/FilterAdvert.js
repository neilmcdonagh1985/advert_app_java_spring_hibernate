import React, { Component, Fragment } from "react";
import FilteredAdvertList from "../components/FilteredAdvertList";
import SearchBySeller from "../components/SearchBySeller";
import SearchByCategory from "../components/SearchByCategory";
import SearchByKeyword from "../components/SearchByKeyword";

class FilterAdvert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sellers: [],
            adverts:[],
            categories:[],
            viewBySeller: false,
            viewByCategory: false,
            viewByKeyword: false,
            showSearchOptions: true
        };

        this.selectSearchByCategory = this.selectSearchByCategory.bind(this);
        this.selectSearchBySellers = this.selectSearchBySellers.bind(this);
        this.selectSearchByKeyword = this.selectSearchByKeyword.bind(this);
        this.handleReturnToOptions = this.handleReturnToOptions.bind(this);
    }

    componentDidMount() {
        this.fetchSellers();
        this.fetchAdverts();
        this.fetchCategories();
    }

    fetchSellers() {
        fetch('http://localhost:8080/sellers')
        .then(response => response.json())
        .then(jsonData => {
            this.setState({ sellers: jsonData['_embedded'].sellers})
        })
    }

    fetchAdverts() {
        fetch('http://localhost:8080/adverts')
        .then(response => response.json())
        .then(jsonData => {
            this.setState({ adverts: jsonData['_embedded'].adverts})
        })
    }

    fetchCategories() {
        fetch('http://localhost:8080/categories')
        .then(response => response.json())
        .then(jsonData => {
            this.setState({ categories: jsonData['_embedded'].categories})
        })
    }

    selectSearchBySellers() {
        let viewBySeller = this.state.viewBySeller;
        let viewByCategory = this.state.viewByCategory;
        let viewByKeyword = this.state.viewByKeyword;
        this.setState({viewBySeller: !viewBySeller, 
            viewByCategory: false, viewByKeyword: false, showSearchOptions: false });       
    }

    selectSearchByCategory() {
        let viewBySeller = this.state.viewBySeller;
        let viewByCategory = this.state.viewByCategory;
        let viewByKeyword = this.state.viewByKeyword;
        this.setState({ viewByCategory: !viewByCategory,
            viewBySeller: false, viewByKeyword: false, showSearchOptions: false });      
    }

    selectSearchByKeyword() {
        let viewBySeller = this.state.viewBySeller;
        let viewByCategory = this.state.viewByCategory;
        let viewByKeyword = this.state.viewByKeyword;
        this.setState({ viewByKeyword: !viewByKeyword,
        viewBySeller: false, viewByCategory: false, showSearchOptions: false}) 
    }

    handleReturnToOptions() {
        this.setState({showSearchOptions: true, viewBySeller: false, viewByCategory: false, viewByKeyword: false})
    }

    render() {
        const viewBySeller = this.state.viewBySeller;
        const viewByCategory = this.state.viewByCategory;
        const viewByKeyword = this.state.viewByKeyword;
        let searchByKeyword;
        const showSearchOptions = this.state.showSearchOptions;

        if (viewBySeller) {
            return (
                <SearchBySeller sellers={this.state.sellers} 
            handleReturnToOptions={this.handleReturnToOptions} />
            )
            
        } else if (viewByCategory) {
            return (
                <SearchByCategory categories={this.state.categories} 
            handleReturnToOptions={this.handleReturnToOptions} />
            ) 
        } 
        else if (viewByKeyword) {
            return (
                <SearchByKeyword adverts={this.state.adverts}
            handleReturnToOptions={this.handleReturnToOptions} />
            )
        }

        if (showSearchOptions) {
            return (
                <div className="filter-options">
                    <div>
                        <h3 onClick={this.selectSearchBySellers}>Search Ads by Seller</h3>
                    </div>
                    <div>
                        <h3 onClick={this.selectSearchByCategory}>Search Ads by category</h3>
                    </div>
                    <div>
                        <h3 onClick={this.selectSearchByKeyword}>Search Ads by Keyword</h3>
                    </div>
                </div>
                );
        } 
    }
}

// const SearchBySeller = (props) => (
//     <div>
//         <select onChange={(event) => props.handleSelectedSellersAdverts(event.target.value)}>
//         {props.sellers.map((seller, index) => 
//         <option key={index} value={seller.id}>{seller.name}</option>)}
//         </select>
//         <button onClick={props.handleReturnToOptions}>
//             Return To Options
//         </button>
//     </div>
// )

// const SearchByCategory = (props) => (
//     <div>
//         <h3>You have chosen to search by category</h3>
//         <button onClick={props.handleReturnToOptions}>
//             Return To Options
//         </button>
//     </div>
// )

// const SearchByKeyword = (props) => (
//     <div>
//         <h3>You have chosen to search by keyword</h3>
//         <button onClick={props.handleReturnToOptions}>
//             Return To Options
//         </button>
//     </div>
// )

export default FilterAdvert;