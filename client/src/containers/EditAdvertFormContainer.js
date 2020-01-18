import React, { Component } from 'react';
import EditAdvertForm from '../components/EditAdvertForm'


class EditAdvertFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        // binds in here
    }
    //methods in here

    render() {
        return (
            <div className="edit-advert-form-container">
                <EditAdvertForm />

            </div>
        )
    }

}

export default EditAdvertFormContainer;