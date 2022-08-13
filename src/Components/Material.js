import React from 'react'


export default function Material (props) {
    const {item, description, amount, contact} = props

    return (
    <div className="MaterialContainer">
        <h3 className="MaterialHeader"> </h3>
        <div className="MaterialBody">
            <p>Item: {item}</p>
            <p>Description: {description}</p>
            <p>Amount: {amount}</p>
            <p>Contact: {contact}</p>
        </div>
    </div>
    )
}

