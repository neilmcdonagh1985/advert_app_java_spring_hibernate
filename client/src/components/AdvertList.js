import React, { Component } from "react";
import Advert from "./Advert";

class AdvertList extends Component {
    render() {
        const advertNodes = this.props.data.map((advert, index) => {
            return (
              <Advert title={advert.title} key={index}>{advert.description}</Advert>
            );
        });

        return (
            <div className="advert-list">
                {advertNodes}
            </div>
        )
    }
}

export default AdvertList;