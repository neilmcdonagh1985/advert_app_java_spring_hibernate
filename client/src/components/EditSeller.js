import React, { Component, Fragment } from 'react';
import EditForm from './EditForm';
import FilteredAdvertList from './FilteredAdvertList';

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
            showForm: false,
            updateDetails: false,
            showAds: false
            
            

        }
        // this.submitSellerChanges = this.submitSellerChanges.bind(this);
        this.handleEditSeller = this.handleEditSeller.bind(this);
        this.submitSellerChanges = this.submitSellerChanges.bind(this);
        this.handleSellerEdit = this.handleSellerEdit.bind(this);
        this.showSellersAdverts = this.showSellersAdverts.bind(this);

    }

    componentDidMount() {
        fetch('http://localhost:8080/sellers')
            .then(response => response.json())
            .then(jsonData => this.setState({ data: jsonData['_embedded'].sellers }));
    }

    handleEditSeller(event) {   
        let showForm = this.state.showForm
        const selectedSeller = this.state.selectedSeller

        if (showForm) {
            this.setState({showForm: false})
            
        }

            this.setState({ selectedSeller: this.state.data[event.target.value], // showForm: !showForm,
                sellerId: this.state.data[event.target.value].id,
                sellerName: this.state.data[event.target.value].name,
                sellerPhoneNumber: this.state.data[event.target.value].phoneNumber,
                sellerEmail: this.state.data[event.target.value].email})  
    }

    showSellersAdverts(event) {
        console.log(event.target.value);
        fetch(`http://localhost:8080/sellers/${event.target.value}/adverts`)
        .then(response => response.json())
        .then(jsonData => this.setState({ data: jsonData['_embedded'].adverts, 
        showForm: false, updateDetails: false, showAds: true}))
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSellerEdit(updatedSellerDetail) {
        fetch(`http://localhost:8080/sellers/${updatedSellerDetail.sellerId}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: updatedSellerDetail.sellerName,
                phoneNumber: updatedSellerDetail.sellerPhoneNumber,
                email: updatedSellerDetail.sellerEmail
            })
        })

    }

    submitSellerChanges(event) {
        // event.preventDefault();
        console.log(event)
        const sellerId = this.state.sellerId;
        const sellerName = this.state.sellerName.trim();
        const sellerPhoneNumber = this.state.sellerPhoneNumber.trim();
        const sellerEmail = this.state.sellerEmail.trim();
        this.handleSellerEdit({sellerId, sellerName, sellerPhoneNumber, sellerEmail})

    }

    handleShowForm = (event) => {
        this.setState({
            updateDetails: true,
            showForm: true
        }) 
    }

    render() {
        const showForm = this.state.showForm;
        const showAds = this.state.showAds;
        const updateDetails = this.state.updateDetails;
        let form;
        const showMessage = this.state.showMessage;
        let message;
        const selectedSeller = this.state.selectedSeller;
        let confirmationMessage;
        
     
        if (!selectedSeller) {
            message = <Message />
        } else if (selectedSeller && !showForm) {
            confirmationMessage = <ConfirmationMessage selectedSeller={this.state.selectedSeller}
            handleShowForm={this.handleShowForm} />
        }

        if (showForm) {
             form = <EditForm selectedSeller={this.state.selectedSeller} handleInputChange={this.handleInputChange}
             submitSellerChanges={this.submitSellerChanges} showSellersAdverts={this.showSellersAdverts}/>
        }

        if (showAds && !showForm && !updateDetails) {
            return (
                <FilteredAdvertList adverts={this.state.data} />
            )

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
                { message }
                { confirmationMessage }
                { form }
            </Fragment>
        )   
    }
}

const Message = () => (
    <div>
        <h3>Please select an Account to Update</h3>
    </div>
)

const ConfirmationMessage = (props) => (
    <Fragment>
    <div>
        <h3>Are you sure you want to update {props.selectedSeller.name}'s details?</h3>
    </div>
    <div>
        <button onClick={props.handleShowForm}>Yes</button>
    </div>
    </Fragment>
)



export default EditSeller;