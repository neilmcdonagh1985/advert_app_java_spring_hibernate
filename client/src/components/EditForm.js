import React, { Component, Fragment } from 'react';

const EditForm = (props) => (
    <div>
        <form className="edit-seller-form">
            <div className="form-title">
                <h3>Check your Contact Details are Up-to-date</h3>
            </div>

            <label>Contact Name</label>
            <input
                type="text" defaultValue={props.selectedSeller.name} onChange={props.handleInputChange} name="sellerName">
            </input>

            <label>Contact Phone Number</label>
            <input
                type="text" defaultValue={props.selectedSeller.phoneNumber} onChange={props.handleInputChange} name="sellerPhoneNumber">
            </input>

            <label>Email</label>
            <input
                type="text" defaultValue={props.selectedSeller.email} onChange={props.handleInputChange} name="sellerEmail">
            </input>

            <div id="edit-advert-form-submit-button">
                <button
                    type="submit">
                    Update Contact Details
                    </button>

            </div>

        </form>
    </div>
)

export default EditForm;

// class SelectSellerDropBox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             selectedSeller: ""


//         }
//         this.handleEditSeller = this.handleEditSeller.bind(this);
//         this.handleSellerEdit = this.handleSellerEdit.bind(this);

//     }




//     handleSellerEdit(updatedSellerDetail) {
//         this.setState({selectedSeller: updatedSellerDetail})
//         // console.log(updatedSellerDetail)
//         fetch(`http://localhost:8080/sellers/${updatedSellerDetail.sellerId}`, {
//             method: "PUT",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name: updatedSellerDetail.sellerName,
//                 phoneNumber: updatedSellerDetail.sellerPhoneNumber,
//                 email: updatedSellerDetail.sellerEmail
//             }),

//         })


//         // .then(res => {res.json();
//         // })
//         // .then(jsonData => this.setState({ selectedSeller: jsonData}));

//     }







    // render() {
        // const {selectedSeller} = this.state
        // const renderEditSellerForm = () => {
        //     if (selectedSeller){
        //         return <EditSellerForm selectedSeller={this.state.selectedSeller} onEditSeller={this.handleSellerEdit} 
        //         updateSelectedSeller={this.handleEditSeller} />
        //     }
        // }

        // return (
        //     <Fragment>
        //         <table className="seller-table">
        //             <thead>
        //                 <tr>
        //                     <th>Name</th>
        //                     <th>Phone Number</th>
        //                     <th>Email</th>
        //                     <th>Edit</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {this.state.data.map((seller, index) => 
        //                   <tr key={index}>
        //                     <td>{seller.name}</td>
        //                     <td>{seller.phoneNumber}</td>
        //                     <td>{seller.email}</td>
        //                     <td>
        //                         <button value={index} onClick={this.handleEditSeller}>Edit</button>
        //                     </td>
        //                   </tr>
        //                 )}
        //             </tbody>
        //         </table>
                // {/* {renderEditSellerForm()} */}
            // </Fragment>


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
//         )
//     }




// } 

// export default SelectSellerDropBox;