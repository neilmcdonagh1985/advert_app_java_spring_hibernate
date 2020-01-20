import React, { Component } from 'react';
import NewAdvertForm from '../components/NewAdvertForm';

class NewAdvertFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        // binds in here when methods created

    }

    handleNewAdvertSubmit(formDetail) {
        fetch("http://localhost:8080/sellers", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDetail),
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
                    title: formDetail.title,
                    advert: `http://localhost:8080/adverts/${seller.id}`,
                    description: formDetail.descrption,
                    dateListed: formDetail.dateListed,
                    urgentOrNot: formDetail.urgentOrNot,
                    price: formDetail.price
                })
            })
            .then(res => res.json())
            .then(advert => this.props.onNewAdvertAdded(advert))
        })

    }

    // methods in here

    render() {
        return (
            <div className="new-advert-form-container">
                <NewAdvertForm />
            </div>

        )

    }
}

export default NewAdvertFormContainer;