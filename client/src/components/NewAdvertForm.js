import React, { Component } from 'react';

class NewAdvertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // binds in here

    }

    // methods in here


    render() {
        return (
            <form className="new-advert-form">
                <div className="form-title">
                    <h3>What are the Contact Details for your Advert?</h3>
                </div>

                <label>Contact Name</label>
                <input
                    type="text"
                    placeholder="Enter the contact name">
                </input>

                <label>Contact Phone Number</label>
                <input
                    type="text"
                    placeholder="Enter the contact number">
                </input>

                <label>Email</label>
                <input
                    type="text"
                    placeholder="Enter the contact email">
                </input>

                <div className="form-title">
                    <h3>Now Enter your Advert Details</h3>
                </div>

                <label>Title of the Ad</label>
                <input
                    type="text"
                    placeholder="Enter the ad title">
                </input>

                <label>Description on the Ad</label>
                <textarea
                    id="description" name="description"
                    rows="6" cols="35" placeholder="enter your description here">
                </textarea>

                <label>Mark as urgent</label>
                <input
                    type="checkbox">
                </input>

                <label>Price</label>
                <input
                    type="text"
                    placeholder="Enter the price">
                </input>




            </form>

        )
    }

}

export default NewAdvertForm;