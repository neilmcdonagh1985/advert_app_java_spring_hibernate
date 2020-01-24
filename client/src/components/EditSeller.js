import React, { Component, Fragment } from 'react';
import EditForm from './EditForm';

class EditSeller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSeller: "",
            data: [],
            sellerId: "",
            sellerName: "",
            sellerPhoneNumber: "",
            sellerEmail: "",
            showForm: false

        }
        // this.submitSellerChanges = this.submitSellerChanges.bind(this);
        this.handleEditSeller = this.handleEditSeller.bind(this);

    }

    componentDidMount() {
        fetch('http://localhost:8080/sellers')
            .then(response => response.json())
            .then(jsonData => this.setState({ data: jsonData['_embedded'].sellers }));
    }

    handleEditSeller(event) {   
        const showForm = this.state.showForm
        // [event.target.name]: event.target.value    
        // this.setState({ showForm: !showForm})   
        this.setState({ selectedSeller: this.state.data[event.target.value], showForm: !showForm,
        sellerId: this.state.data[event.target.value].id,
        sellerName: this.state.data[event.target.value].name,
        sellerPhoneNumber: this.state.data[event.target.value].phoneNumber,
        sellerEmail: this.state.data[event.target.value].email})
    }




    // componentDidMount() {
    //     const { selectedSeller } = this.props
    //     this.setState({
    //         sellerId: selectedSeller.id,
    //         sellerName: selectedSeller.name,
    //         sellerPhoneNumber: selectedSeller.phoneNumber,
    //         sellerEmail: selectedSeller.email
    //     })
    // }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // submitSellerChanges(event) {
    //     // event.preventDefault();
    //     console.log(this.state);
    //     const sellerId = this.state.sellerId;
    //     const sellerName = this.state.sellerName.trim();
    //     const sellerPhoneNumber = this.state.sellerPhoneNumber.trim();
    //     const sellerEmail = this.state.sellerEmail.trim();
    //     this.props.onEditSeller({ sellerId, sellerName, sellerPhoneNumber, sellerEmail })

    // }




    render() {
        const showForm = this.state.showForm;
        let form;
        let message;

        if (showForm) {
             form = <EditForm selectedSeller={this.state.selectedSeller} handleInputChange={this.handleInputChange}/>

        }

        return (
            <Fragment>
                <table className="seller-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((seller, index) =>
                            <tr key={index}>
                                <td>{seller.name}</td>
                                <td>{seller.phoneNumber}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <button value={index} onClick={this.handleEditSeller}>Edit</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                { form }
            </Fragment>
        )

        
    }
}



export default EditSeller;