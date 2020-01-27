import React, { Component, Fragment } from "react";
import FilteredAdvertList from "../components/FilteredAdvertList";

class FilterAdvert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            sellers: [],
            adverts: [],
            viewBySeller: false
        };

        this.handleSelectedSellersAdverts = this.handleSelectedSellersAdverts.bind(this);

    }

    componentDidMount() {
        fetch('http://localhost:8080/adverts')
            .then(response => response.json())
            .then(jsonData => {
                this.setState({ data: jsonData['_embedded'].adverts });
            });
            this.fetchAllSellers();
    }

    fetchAllSellers() {
        fetch('http://localhost:8080/sellers')
            .then(response => response.json())
            .then(jsonData => {
                this.setState({ sellers: jsonData['_embedded'].sellers });
            });
    }

    handleSelectedSellersAdverts(value) {
        // let viewBySeller = this.state.viewBySeller


        fetch(`http://localhost:8080/sellers/${value}/adverts`)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({ adverts: jsonData['_embedded'].adverts, viewBySeller: true });
        });

    }




    render() {
        return (
            <div className="filter-options">
                <ViewBySeller sellers={this.state.sellers} 
                handleSelectedSellersAdverts={this.handleSelectedSellersAdverts} />
                <ViewByCategory />
                <SearchByKeyword />
            </div>
            // <div className="advert-box">
            //     <h2>Adverts</h2>
            //     <FilteredAdvertList data={this.state.data} />
            // </div>
        );
    }
}

const ViewBySeller = (props) => (
    <Fragment>
        <div className="filter-by-seller">
            <select onChange={(event) => props.handleSelectedSellersAdverts(event.target.value)}>
                {props.sellers.map((seller, index) => 
                <option key={index} value={seller.id}>{seller.name}</option>)}
            </select>
        </div>
    </Fragment>
)

const ViewByCategory = () => (
    <div>
        <h3>This will be view by category</h3>
    </div>
)

const SearchByKeyword = () => (
    <div>
        <h3>This will be search by keyword</h3>
    </div>
)



export default FilterAdvert;