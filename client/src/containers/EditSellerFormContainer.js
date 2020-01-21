import React, { Component } from 'react';
import EditSellerForm from '../components/EditSellerForm'


class EditSellerFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedSeller: null
        }
        // binds in here
    }
    
    handleSellerEdit(updatedSellerDetail) {
        fetch(`http://localhost:8080/sellers/${this.state.selectedSeller.id}`)

    }

    render() {
        return (
            <div className="edit-seller-form-container">
                <EditSellerForm 
                  selectedAdvert={this.state.selectedAdvert}
                  onSellerEdit={this.handleSellerEdit}/>

            </div>
        )
    }

}

export default EditSellerFormContainer;