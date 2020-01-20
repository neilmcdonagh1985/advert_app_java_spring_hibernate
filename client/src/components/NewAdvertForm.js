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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUrgentOrNotChange = this.handleUrgentOrNotChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // methods in here
    handleSubmit(event) {
        event.preventDefault();
        const sellerName = this.state.sellerName.trim();
        const sellerPhoneNumber = this.state.sellerPhoneNumber.trim();
        const sellerEmail = this.state.sellerEmail.trim();
        const advertTitle = this.state.advertTitle.trim();
        const advertDescription = this.state.advertDescription.trim();
        const urgentOrNot = this.state.urgentOrNot;
        const price = this.state.price.trim();

        // if (!sellerName || !sellerPhoneNumber || !sellerEmail || !advertTitle || !advertDescription || !urgentOrNot || !price) {
            // return
        // } else {
            this.props.onNewAdvertSubmit({sellerName, sellerPhoneNumber, sellerEmail, advertTitle, advertDescription, urgentOrNot, price});
            
            this.setState({
                sellerName: "",
                sellerPhoneNumber: "",
                sellerEmail: "",
                advertTitle: "",
                advertDescription: "",
                urgentOrNot: false,
                price: ""
            });

        // }
    
        
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUrgentOrNotChange = (event) => {
        this.setState({urgentOrNot: !this.state.urgentOrNot})
    }

   


    render() {
        return (
            <form className="new-advert-form" onSubmit={this.handleSubmit}>
                <div className="form-title">
                    <h3>What are the Contact Details for your Advert?</h3>
                </div>

                <label>Contact Name</label>
                <input
                    type="text"
                    placeholder="Enter the contact name"
                    name='sellerName'
                    onChange={this.handleInputChange} required>
                </input>

                <label>Contact Phone Number</label>
                <input
                    type="text"
                    placeholder="Enter the contact number"
                    name='sellerPhoneNumber'
                    onChange={this.handleInputChange} required>
                </input>

                <label>Email</label>
                <input
                    type="text"
                    placeholder="Enter the contact email"
                    name='sellerEmail'
                    onChange={this.handleInputChange} required>
                </input>

                <div className="form-title">
                    <h3>Now Enter your Advert Details</h3>
                </div>

                <label>Title of the Ad</label>
                <input
                    type="text"
                    placeholder="Enter the ad title"
                    name='advertTitle'
                    onChange={this.handleInputChange} required>
                </input>

                <label>Description on the Ad</label>
                <textarea
                    id="description" name="description"
                    rows="6" cols="35" placeholder="enter your description here"
                    name='advertDescription'
                    onChange={this.handleInputChange} required>
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
                    onChange={this.handleInputChange} required>
                </input>

                <div id="new-advert-form-submit-button">
                    <button
                    type="submit">
                        Place Ad
                    </button>
                </div>
            </form>

        )
    }

}

export default NewAdvertForm;