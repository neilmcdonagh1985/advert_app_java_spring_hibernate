import React, { Component, Fragment } from 'react';
import FilteredAdvertList from './FilteredAdvertList';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSellersAdverts: false

        }
        this.handleShowSellersAdverts = this.handleShowSellersAdverts.bind(this);
    }

    handleShowSellersAdverts(event) {
        this.props.showSellersAdverts(event);
        // place showSellersAdverts variable in here if needed
        
        
    }

    render() {
            return (
                <Fragment>
                <div>
        <form className="edit-seller-form" onSubmit={this.props.submitSellerChanges}>
            <div className="form-title">
                <h3>Check your Contact Details are Up-to-date</h3>
            </div>

            <label>ID</label>
              <input type="text" defaultValue={this.props.selectedSeller.id} onChange={this.props.handleInputChange} name="sellerId">
              </input>

            <label>Contact Name</label>
              <input
                type="text" defaultValue={this.props.selectedSeller.name} onChange={this.props.handleInputChange} name="sellerName">
              </input>

            <label>Contact Phone Number</label>
              <input
                type="text" defaultValue={this.props.selectedSeller.phoneNumber} onChange={this.props.handleInputChange} name="sellerPhoneNumber">
              </input>

            <label>Email</label>
              <input
                type="text" defaultValue={this.props.selectedSeller.email} onChange={this.props.handleInputChange} name="sellerEmail">
              </input>

            <div id="edit-advert-form-submit-button">
                <button
                    type="submit">
                    Update Contact Details
                </button>
            </div>
        </form>

        <div id="show-sellers-adverts-button">
                <button
                    onClick={this.handleShowSellersAdverts} value={this.props.selectedSeller.id}>
                    View {this.props.selectedSeller.name}'s Ads
                    </button>
            </div>
    </div>
    
    </Fragment>
    

            )

        
        
    }
}

export default EditForm;

// const EditForm = (props) => (
    // <div>
    //     <form className="edit-seller-form" onSubmit={props.submitSellerChanges}>
    //         <div className="form-title">
    //             <h3>Check your Contact Details are Up-to-date</h3>
    //         </div>

    //         <label>ID</label>
    //         <input type="text" defaultValue={props.selectedSeller.id} onChange={props.handleInputChange} name="sellerId">
    //         </input>

    //         <label>Contact Name</label>
    //         <input
    //             type="text" defaultValue={props.selectedSeller.name} onChange={props.handleInputChange} name="sellerName">
    //         </input>

    //         <label>Contact Phone Number</label>
    //         <input
    //             type="text" defaultValue={props.selectedSeller.phoneNumber} onChange={props.handleInputChange} name="sellerPhoneNumber">
    //         </input>

    //         <label>Email</label>
    //         <input
    //             type="text" defaultValue={props.selectedSeller.email} onChange={props.handleInputChange} name="sellerEmail">
    //         </input>

    //         <div id="edit-advert-form-submit-button">
    //             <button
    //                 type="submit">
    //                 Update Contact Details
    //                 </button>

    //         </div>

    //     </form>
    // </div>
// )




