import React, { Component } from "react";
import AdvertBox from "../containers/AdvertBox";

class Advert extends Component {
    render() {
        return (
            <div className="advert">
                <h4>{this.props.title}</h4>
                <p>{this.props.children}</p>
            </div>

        );
    }
}

export default Advert;