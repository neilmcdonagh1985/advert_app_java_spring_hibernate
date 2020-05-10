import React, { Component } from 'react';
import NewAdvertForm from '../components/NewAdvertForm';

class NewAdvertFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            category: null
        }
        this.handleNewAdvertSubmit = this.handleNewAdvertSubmit.bind(this);

    }
    
    // async componentDidMount() {
    //     const url = "http://localhost:8080/categories";
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     this.setState({category: data[0]});
    // }

    handleNewAdvertSubmit(formDetail) {
        // const category = JSON.stringify(formDetail.advertCategory)
        const category = JSON.stringify(this.props.categories[formDetail.advertCategory]);
        console.log(category);
        fetch('http://localhost:8080/sellers', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "name": formDetail.sellerName,
                "phoneNumber": formDetail.sellerPhoneNumber,
                "email": formDetail.sellerEmail,
            })         
        })
        .then((res) => res.json())
        .then(seller => fetch('http://localhost:8080/adverts', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "name": formDetail.advertTitle,
                "description": formDetail.advertDescription,
                "dateListed": formDetail.dateListed,
                "urgentOrNot": formDetail.urgentOrNot,
                "price": formDetail.price,
                "seller": `http://localhost:8080/sellers/${seller.id}`,
                
            })
        }))
        .then((res) => res.json())
        .then(advert => console.log(advert))

        // refactor to a many to one relationship - same as seller in java modelsvvvvvvv
    }

   

    

    render() {
        return (
            <div className="new-advert-form-container">
                <NewAdvertForm onNewAdvertSubmit={this.handleNewAdvertSubmit} categories={this.props.categories} />
            </div>

        )

    }
}

export default NewAdvertFormContainer;