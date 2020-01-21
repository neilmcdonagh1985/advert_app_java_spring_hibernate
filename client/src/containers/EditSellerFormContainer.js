import React, { Component, Fragment } from 'react';
import EditSellerForm from '../components/EditSellerForm';
import SelectSellerDropBox from '../components/SelectSellerDropBox';


class EditSellerFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
            
        }
        this.fetchAllSellers = this.fetchAllSellers.bind(this);
    }

    componentDidMount() {
        this.fetchAllSellers()
    }
    
    fetchAllSellers() {
        fetch(`http://localhost:8080/sellers`)
        .then(response => response.json())
        .then(jsonData => this.setState({ data: jsonData['_embedded'].sellers}));

    }

    render() {
        
        return (
            <Fragment>
            <div className="edit-seller-form-container">
                <EditSellerForm 
                  selectedAdvert={this.state.selectedAdvert}
                  onSellerEdit={this.handleSellerEdit}/>
                <SelectSellerDropBox
                  sellers={this.state.data}/>
            </div>
            </Fragment>
        )
    }

}

export default EditSellerFormContainer;