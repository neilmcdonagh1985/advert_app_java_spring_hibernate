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
        .then(jsonData => this.setState({ data: jsonData['_embedded'].sellers}));

    }

    handleSelectedSeller(value) {
        this.setState({ selectedSeller: value})

    }

    render() {
        
        return (
            <Fragment>
            <div className="edit-seller-form-container">
                <EditSellerForm 
                  selectedAdvert={this.state.selectedAdvert}
                  onSellerEdit={this.handleSellerEdit}/>
                <SelectSellerDropBox
                  sellers={this.state.data} selectSellerForEdit={this.handleSelectedSeller}/>
            </div>
            </Fragment>
        )
    }

}

export default EditSellerFormContainer;