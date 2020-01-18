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