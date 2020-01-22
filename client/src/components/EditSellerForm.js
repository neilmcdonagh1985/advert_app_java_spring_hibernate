import React, { Component, Fragment } from 'react';

class EditSellerForm extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
      
     
    }
    

    render() {
     return (
            
            <form className="edit-seller-form">
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