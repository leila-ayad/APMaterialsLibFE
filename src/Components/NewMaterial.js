import React from "react";
import useForm from "../Hooks/useForm";
import useCheckbox from "../Hooks/useCheckbox";

const initialMaterial = {
  name: "",
  description: "",
  unit: "",
  phone: "",
  email: "",
  image: "",
};

const checkboxes = {
  phone: false,
  email: false,
};

export default function NewMaterial() {
  const { formData, handleInputChange } = useForm(initialMaterial);
  const { checked, handleCheckbox } = useCheckbox(checkboxes);

  return (
    <div>
      {/* I think I need to use Axios here to send the member_id with the req.body */}
      <form
        action="http://localhost:9000/api/materials/upload"
        enctype="multipart/form-data"
        method="POST"
      >
        <label for="name">
          Name of Material
          <input
            name="name"
            type="text"
            placeholder="Material name"
            value={formData.name}
            onChange={handleInputChange}
          ></input>
        </label>
        <label for="description">
          Describe the materials
          <input
            name="description"
            type="text"
            placeholder="Uses, quality, color, type, etc."
            value={formData.description}
            onChange={handleInputChange}
          ></input>
        </label>
        <label for="unit">
          Amount available
          <input
            name="unit"
            type="text"
            placeholder="Weight, length, height, etc."
            value={formData.unit}
            onChange={handleInputChange}
          ></input>
        </label>
        <div>
          <label>
            Contact Method: Select all that apply<br></br>
            <label for="phone">phone</label>
            <input
              name="phone"
              type="checkbox"
              onChange={() => handleCheckbox("phone", checked.phone)}
            ></input>
            {checked.phone === true ? (
              <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            ></input>
            ) : (
              ""
            )}
            <label for="email">email</label>
            <input
              name="email"
              type="checkbox"
              onChange={() => handleCheckbox("email", checked.email)}
            ></input>
            {checked.email === true ? (
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              ></input>
            ) : (
              ""
            )}
          </label>
        </div>
        <label for="pic">
          Upload a photo
          <input type="file" name="pic" />
        </label>
        <input type="submit" value="Upload a file" />
      </form>
    </div>
  );
}
