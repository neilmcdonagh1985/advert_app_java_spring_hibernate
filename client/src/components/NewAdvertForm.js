import React, { Component } from 'react';

class NewAdvertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sellerName: "",
            sellerPhoneNumber: "",
            sellerEmail: "",
            advertTitle: "",
            advertDescription: "",
            dateListed: new Date(),
            urgentOrNot: false,
            price: ""
        };
        // binds in here

    }

    // methods in here
    submitItem(event) {
        event.preventDefault();


    }

    handleInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUrgentOrNotChange = (event) => {
        this.setState({urgentOrNot: !this.state.urgentOrNot})
    }

   


    render() {
        return (
            <form className="new-advert-form" onSubmit={this.submitItem}>
                <div className="form-title">
                    <h3>What are the Contact Details for your Advert?</h3>
                </div>

                <label>Contact Name</label>
                <input
                    type="text"
                    placeholder="Enter the contact name"
                    name='sellerName'
                    onChange={this.handleInputChange}>
                </input>

                <label>Contact Phone Number</label>
                <input
                    type="text"
                    placeholder="Enter the contact number"
                    name='sellerPhoneNumber'
                    onChange={this.handleInputChange}>
                </input>

                <label>Email</label>
                <input
                    type="text"
                    placeholder="Enter the contact email"
                    name='sellerEmail'
                    onChange={this.handleInputChange}>
                </input>

                <div className="form-title">
                    <h3>Now Enter your Advert Details</h3>
                </div>

                <label>Title of the Ad</label>
                <input
                    type="text"
                    placeholder="Enter the ad title"
                    name='advertTitle'
                    onChange={this.handleInputChange}>
                </input>

                <label>Description on the Ad</label>
                <textarea
                    id="description" name="description"
                    rows="6" cols="35" placeholder="enter your description here"
                    name='advertDescription'
                    onChange={this.handleInputChange}>
                </textarea>

                <label>Mark as urgent</label>
                <input
                    type="checkbox"
                    name="urgentOrNot"
                    onChange={this.handleUrgentOrNotChange}>
                </input>

                <label>Price</label>
                <input
                    type="text"
                    placeholder="Enter the price"
                    name='price'
                    onChange={this.handleInputChange}>
                </input>

                <div id="new-advert-form-submit-button">
                    <button>
                        Place Ad
                    </button>
                </div>
            </form>

        )
    }

}

export default NewAdvertForm;