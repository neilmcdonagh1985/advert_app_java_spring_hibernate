import React, { Component } from 'react';

class EditAdvertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        //binds in here
    }
    //methods in here
    render() {
        return (
            <form className="edit-advert-form">
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

                <div className="form-title">
                    <h3>Update any Advert Details you Wish</h3>
                </div>

                <label>Title of the Ad</label>
                <input
                    type="text">
                </input>

                <label>Description on the Ad</label>
                <textarea
                    id="description" name="description"
                    rows="6" cols="35">
                </textarea>

                <label>Mark as urgent</label>
                <input
                    type="checkbox">
                </input>

                <label>Price</label>
                <input
                    type="text">
                </input>

            </form>
        )
    }
}

export default EditAdvertForm;