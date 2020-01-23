import React, { Component, Fragment } from 'react';

class EditSellerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sellerId: "",
            sellerName: "",
            sellerPhoneNumber: "",
            sellerEmail: "",
            
        }
        this.submitSellerChanges = this.submitSellerChanges.bind(this);
        
    }

    componentDidMount() {
        const { selectedSeller } = this.props
        this.setState({
            sellerId: selectedSeller.id,
            sellerName: selectedSeller.name,
            sellerPhoneNumber: selectedSeller.phoneNumber,
            sellerEmail: selectedSeller.email
        })
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitSellerChanges(event) {
        // event.preventDefault();
        console.log(this.state);
        const sellerId = this.state.sellerId;
        const sellerName = this.state.sellerName.trim();
        const sellerPhoneNumber = this.state.sellerPhoneNumber.trim();
        const sellerEmail = this.state.sellerEmail.trim();
        this.props.onEditSeller({sellerId, sellerName, sellerPhoneNumber, sellerEmail})
        
    }

    
    

    render() {
     return (
            
            <form className="edit-seller-form" onSubmit={this.submitSellerChanges}>
                <div className="form-title">
                    <h3>Check your Contact Details are Up-to-date</h3>
                </div>

                <label>Contact Name</label>
                <input
                    type="text" defaultValue={this.props.selectedSeller.name} onChange={this.handleInputChange} name="sellerName">
                </input>

                <label>Contact Phone Number</label>
                <input
                    type="text" defaultValue={this.props.selectedSeller.phoneNumber} onChange={this.handleInputChange} name="sellerPhoneNumber">
                </input>

                <label>Email</label>
                <input
                    type="text" defaultValue={this.props.selectedSeller.email} onChange={this.handleInputChange} name="sellerEmail">
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