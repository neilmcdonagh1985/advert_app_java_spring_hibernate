import React, { Component } from "react";
import AdvertList from "../components/AdvertList"

class AdvertBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: "Sport Socks",
                    description: "Two for a poun'" 
                },
                {
                    id: 2,
                    title: "Curry's",
                    description: "Black Friday sale"
                }
            ]
        };

    }
    render() {
        return (
            <div className="advert-box">
                <h2>Adverts</h2>
                <AdvertList data={this.state.data} />
            </div>
        );
    }
}

export default AdvertBox;