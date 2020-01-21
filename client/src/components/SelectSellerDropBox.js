import React, { Component } from 'react';

const SelectSellerDropBox = (props) => {
    return (
        <div>
            <select onChange={(event) => props.selectSellerForEdit(event.target.value)}>
            {props.sellers.map((seller, index) => 
            <option key={index}>{seller.name}</option>
            
            )}
            </select>
        </div>
    )
    
    
} 

export default SelectSellerDropBox;