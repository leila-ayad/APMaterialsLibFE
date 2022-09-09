import React from "react";

export default function Material({
  item,
  description,
  amount,
  phone,
  email,
  image,
}) {
  console.log(image);
  return (
    <div className="MaterialContainer">
      <h3 className="MaterialHeader">{item} </h3>
      <div className="MaterialBody">
        {image === null ? (
          ""
        ) : (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            className="MaterialImage"
            alt={`${item}'s image cannot be retrieved`}
            src={`https://abstract-picnic-materials-lib.herokuapp.com/api/materials/images/${image}`}
          ></img>
        )}
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        {phone === "" ? null : <p>Phone Number: {phone}</p>}
        {email === "" ? null : <p>Email: {email} </p>}
      </div>
    </div>
  );
}
