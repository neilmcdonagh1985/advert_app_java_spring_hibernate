import React, { Component } from "react";
import AdvertList from "../components/AdvertList";

class AdvertBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        
    }

    componentDidMount() {
            fetch('http://localhost:8080/adverts').then(
                function(response) {
                    return response.json();
                }
            ).then(jsonData => {
                this.setState({ data: jsonData['_embedded'].adverts});
                console.log(jsonData);
            });

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