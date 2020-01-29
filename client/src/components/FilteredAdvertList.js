import React, { Component } from "react";
import FilteredAdvertListItem from "./FilteredAdvertListItem";

class FilteredAdvertList extends Component {
    render() {
        const advertNodes = this.props.adverts.map((advert, index) => {
            return (
              <FilteredAdvertListItem title={advert.title} key={index}>{advert.description}</FilteredAdvertListItem>
            );
        });

        return (
            <div className="filtered-advert-list">
                {advertNodes}
            </div>
        )
    }
}

export default FilteredAdvertList;