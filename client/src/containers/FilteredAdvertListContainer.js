import React, { Component } from "react";
import FilteredAdvertList from "../components/FilteredAdvertList";

class FilteredAdvertListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        
    }

    componentDidMount() {
            fetch('http://localhost:8080/adverts')
                .then(response => response.json())
                .then(jsonData => {this.setState({ data: jsonData['_embedded'].adverts});
                console.log(jsonData);
            });

    }


    render() {
        return (
            <div className="advert-box">
                <h2>Adverts</h2>
                <FilteredAdvertList data={this.state.data} />
            </div>
        );
    }
}



export default FilteredAdvertListContainer;