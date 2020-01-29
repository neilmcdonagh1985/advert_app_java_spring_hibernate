import React, { Component, Fragment } from 'react';

const EditForm = (props) => (
    <div>
        <form className="edit-seller-form" onSubmit={props.submitSellerChanges}>
            <div className="form-title">
                <h3>Check your Contact Details are Up-to-date</h3>
            </div>

            <label>ID</label>
            <input type="text" defaultValue={props.selectedSeller.id} onChange={props.handleInputChange} name="sellerId">
            </input>

            <label>Contact Name</label>
            <input
                type="text" defaultValue={props.selectedSeller.name} onChange={props.handleInputChange} name="sellerName">
            </input>

            <label>Contact Phone Number</label>
            <input
                type="text" defaultValue={props.selectedSeller.phoneNumber} onChange={props.handleInputChange} name="sellerPhoneNumber">
            </input>

            <label>Email</label>
            <input
                type="text" defaultValue={props.selectedSeller.email} onChange={props.handleInputChange} name="sellerEmail">
            </input>

            <div id="edit-advert-form-submit-button">
                <button
                    type="submit">
                    Update Contact Details
                    </button>

            </div>

        </form>
    </div>
)

export default EditForm;




