import React from "react";

export default function Material(props) {
  const { item, description, amount, phone, email } = props;
  console.log(props);
  return (
    <div className="MaterialContainer">
      <h3 className="MaterialHeader"> </h3>
      <div className="MaterialBody">
        <p>Item: {item}</p>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        {phone === null ? "" : <p>Phone Number: {phone}</p>}
        {email === null ? "" : <p>Email: {email} </p>}
      </div>
    </div>
  );
}
