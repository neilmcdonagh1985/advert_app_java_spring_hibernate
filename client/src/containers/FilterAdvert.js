import React, { Component, Fragment } from "react";
import FilteredAdvertList from "../components/FilteredAdvertList";

class FilterAdvert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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

    selectSearchBySellers() {
        let viewBySeller = this.state.viewBySeller;
        let viewByCategory = this.state.viewByCategory;
        let viewByKeyword = this.state.viewByKeyword;
        fetch('http://localhost:8080/sellers')
            .then(response => response.json())
            .then(jsonData => {
                this.setState({ data: jsonData['_embedded'].sellers, viewBySeller: !viewBySeller, 
                viewByCategory: false, viewByKeyword: false, showSearchOptions: false });
            });
    }

    selectSearchByCategory() {
        let viewBySeller = this.state.viewBySeller;
        let viewByCategory = this.state.viewByCategory;
        let viewByKeyword = this.state.viewByKeyword;
        fetch('http://localhost:8080/categories')
            .then(response => response.json())
            .then(jsonData => {
                this.setState({ data: jsonData['_embedded'].categories, viewByCategory: !viewByCategory,
            viewBySeller: false, viewByKeyword: false, showSearchOptions: false });
            })
    }

    selectSearchByKeyword() {
        let viewBySeller = this.state.viewBySeller;
        let viewByCategory = this.state.viewByCategory;
        let viewByKeyword = this.state.viewByKeyword;
        fetch('http://localhost:8080/adverts')
        .then(response => response.json())
        .then(jsonData => {
            this.setState({ data: jsonData['_embedded'].adverts, viewByKeyword: !viewByKeyword,
        viewBySeller: false, viewByCategory: false, showSearchOptions: false})
        })
    }

    handleReturnToOptions() {
        this.setState({showSearchOptions: true, viewBySeller: false, viewByCategory: false, viewByKeyword: false})
    }



    render() {
        const viewBySeller = this.state.viewBySeller;
        let searchBySeller;
        const viewByCategory = this.state.viewByCategory;
        let searchByCategory;
        const viewByKeyword = this.state.viewByKeyword;
        let searchByKeyword;
        const showSearchOptions = this.state.showSearchOptions;

        if (viewBySeller) {
            searchBySeller = <SearchBySeller sellers={this.state.data} 
            handleReturnToOptions={this.handleReturnToOptions} />
        } else if (viewByCategory) {
            searchByCategory = <SearchByCategory categories={this.state.data} 
            handleReturnToOptions={this.handleReturnToOptions} />
        } 
        else if (viewByKeyword) {
            searchByKeyword = <SearchByKeyword adverts={this.state.data} 
            handleReturnToOptions={this.handleReturnToOptions}/>
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
        } else {
            return (
                <div>
                { searchBySeller }
                { searchByCategory }
                { searchByKeyword }
                </div>
            )
        }


        // return (
        //     <Fragment>
        //     <div className="filter-options">
        //         <div>
        //             <h3 onClick={this.selectSearchBySellers}>Search Ads by Seller</h3>
        //         </div>
        //         <div>
        //             <h3 onClick={this.selectSearchByCategory}>Search Ads by category</h3>
        //         </div>
        //         <div>
        //             <h3 onClick={this.selectSearchByKeyword}>Search Ads by Keyword</h3>
        //         </div>
        //     </div>
            // { searchBySeller }
            // { searchByCategory }
            // { searchByKeyword }
            // </Fragment>
        // )
    }
}

const SearchBySeller = (props) => (
    <div>
        <h3>You have chosen to search by seller</h3>
        <button onClick={props.handleReturnToOptions}>
            Return To Options
        </button>
    </div>
)

const SearchByCategory = (props) => (
    <div>
        <h3>You have chosen to search by category</h3>
        <button onClick={props.handleReturnToOptions}>
            Return To Options
        </button>
    </div>
)

const SearchByKeyword = (props) => (
    <div>
        <h3>You have chosen to search by keyword</h3>
        <button onClick={props.handleReturnToOptions}>
            Return To Options
        </button>
    </div>
)

export default FilterAdvert;