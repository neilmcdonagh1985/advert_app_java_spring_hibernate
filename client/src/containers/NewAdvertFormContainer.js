import React, { Component } from 'react';
import NewAdvertForm from '../components/NewAdvertForm';

class NewAdvertFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.handleNewAdvertSubmit = this.handleNewAdvertSubmit.bind(this);

    }

    handleNewAdvertSubmit(formDetail) {
        fetch("http://localhost:8080/sellers", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formDetail.sellerName,
                phoneNumber: formDetail.sellerPhoneNumber,
                email: formDetail.sellerEmail
            }),
        })
            .then(res => res.json())
            .then(seller => {
                fetch("http://localhost:8080/adverts", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: formDetail.advertTitle,
                        seller: `http://localhost:8080/adverts/${seller.id}`,
                        description: formDetail.advertDescription,
                        dateListed: formDetail.dateListed,
                        urgentOrNot: formDetail.urgentOrNot,
                        price: formDetail.price
                    })
                })
                    .then(res => res.json())
                    .then(advert => this.props.onNewAdvertAdded(advert))
                    // .then(advert => console.log(advert))
            })
             

    }

    

    render() {
        return (
            <div className="new-advert-form-container">
                <NewAdvertForm onNewAdvertSubmit={this.handleNewAdvertSubmit} />
            </div>

        )

    }
}

export default NewAdvertFormContainer;