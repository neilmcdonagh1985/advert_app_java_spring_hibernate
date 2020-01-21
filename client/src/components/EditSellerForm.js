import React, { Component } from 'react';

class EditSellerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeller: null

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const sellerName = this.state.sellerName;
        const sellerPhoneNumber = this.state.sellerPhoneNumber;
        const sellerEmail = this.state.sellerEmail;

        this.props.onSellerEdit({sellerName, sellerPhoneNumber, sellerEmail});
        
    }
    

    render() {
        return (
            <form className="edit-seller-form" onSubmit={this.handleSubmit}>
                <div className="form-title">
                    <h3>Check your Contact Details are Up-to-date</h3>
                </div>

                <label>Contact Name</label>
                <input
                    type="text">
                </input>

                <label>Contact Phone Number</label>
                <input
                    type="text">
                </input>

                <label>Email</label>
                <input
                    type="text">
                </input>

                <div id="edit-advert-form-submit-button">
                    <button
                    type="submit">
                        Update Contact Details
                    </button>

                </div>

            </form>
        )
    }
}

export default EditSellerForm;