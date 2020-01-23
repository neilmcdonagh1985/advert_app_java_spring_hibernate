import React, { Component, Fragment } from 'react';
import EditSellerForm from './EditSellerForm';

class SelectSellerDropBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedSeller: ""
            
            
        }
        this.handleEditSeller = this.handleEditSeller.bind(this);
        this.handleSellerEdit = this.handleSellerEdit.bind(this);
        
    }

    componentDidMount() {
        fetch('http://localhost:8080/sellers')
        .then(response => response.json())
        .then(jsonData => this.setState({ data: jsonData['_embedded'].sellers, selectedSeller: this.props.sellerToEdit}));
        

    }

    handleEditSeller(event) {
        // if there is no selectedSeller in the state....
        this.setState({ selectedSeller: this.state.data[event.target.value]})

        // else i.e. there is a selectedSeller, set a newSelectedSeller to what was clicked on.
        // 
        
        
    }


    handleSellerEdit(updatedSellerDetail) {
        this.setState({selectedSeller: updatedSellerDetail})
        // console.log(updatedSellerDetail)
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
            }),
        })
        
        // .then(res => {res.json();
        // })
        // .then(jsonData => this.setState({ selectedSeller: jsonData}));

    }





  

    render() {
        const {selectedSeller} = this.state
        const renderEditSellerForm = () => {
            if (selectedSeller){
                return <EditSellerForm selectedSeller={this.state.selectedSeller} onEditSeller={this.handleSellerEdit} 
                updateSelectedSeller={this.handleEditSeller} />
            }
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
                {renderEditSellerForm()}
            </Fragment>
            
            
            // <Fragment>
            //     <div className="edit-customer-dropdown">
            //         <select onChange={(event) => this.handleSelectedSeller(event.target.value)}>
            //             {this.state.data.map((seller, index) => 
            //             <option key={index} value={seller}>{seller.name}</option>)}
            //         </select>
            //     </div>
            //     <div>
            //         <EditSellerForm chosenSeller={this.selectedSeller} />
            //     </div>
            // </Fragment>
        )
    }

    
    
    
} 

export default SelectSellerDropBox;