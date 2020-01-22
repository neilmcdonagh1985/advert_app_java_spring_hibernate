import React, { Component, Fragment } from 'react';
import EditSellerForm from '../components/EditSellerForm';
import SelectSellerDropBox from '../components/SelectSellerDropBox';


class EditSellerFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedSeller: ""

        }
        this.fetchAllSellers = this.fetchAllSellers.bind(this);
        this.handleSelectedSeller = this.handleSelectedSeller.bind(this);
    }

    componentDidMount() {
        this.fetchAllSellers()
    }

    fetchAllSellers() {
        fetch(`http://localhost:8080/sellers`)
            .then(response => response.json())
            .then(jsonData => this.setState({ data: jsonData['_embedded'].sellers }));

    }

  

    handleSellerEdit() {
        // performs the fetch and update here
    }

    render() {

        return (
            <Fragment>
                <div>
                    <select onChange={(event) => this.handleSelectedSeller(event.target.value)}>
                        {this.state.data.map((seller, index) =>
                            <option key={index} value={seller}>{seller.name}</option>)}
                    </select>
                </div>

                <div className="edit-seller-form-container">
                    
                </div>
            </Fragment>
        )
    }

}

export default EditSellerFormContainer;