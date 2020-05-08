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
        //now as this is stringified, I should be able to post this to a new advert - might involve some
        // refactoring of the advert class constructor. 
        
     
        
              
        // .then(handleNewAdvertSubmit(formDetail))
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