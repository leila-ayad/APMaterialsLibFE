import React from "react";

export default function Material({
  item,
  description,
  amount,
  phone,
  email,
  image,
}) {

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
            src={`http://localhost:9000/api/materials/images/${image}`}
          ></img>
        )}
        <p>{description}</p>
        <p>{amount}</p>
        <p>Contact: </p>
        {phone === "" ? null : <p>{phone}</p>}
        {email === "" ? null : <p>{email} </p>}
      </div>
    </div>
  );
}
