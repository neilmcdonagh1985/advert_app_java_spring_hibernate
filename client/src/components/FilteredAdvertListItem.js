import React, { Component } from "react";
// import FilteredAdvertListContainer from "../containers/FilterAdvert";

class FilteredAdvertListItem extends Component {
    render() {
        return (
            <div className="filtered-advert-list-item">
                <h4>{this.props.title}</h4>
                <p>{this.props.children}</p>
            </div>

        );
    }
}

export default FilteredAdvertListItem;