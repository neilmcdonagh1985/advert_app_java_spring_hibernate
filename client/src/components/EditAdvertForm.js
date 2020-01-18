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
                <div>
                    <h3>this will be the edit advert form</h3>
                </div>

            </form>
        )
    }
}

export default EditAdvertForm;