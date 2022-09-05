import React from "react";
import useForm from "../Hooks/useForm";
import useCheckbox from "../Hooks/useCheckbox";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const initialMaterial = {
  material_name: "",
  material_description: "",
  material_unit: "",
  phone_number: null,
  email: null,
  image: File,
};

const checkboxes = {
  phone: false,
  email: false,
};

export default function NewMaterial() {
  const { formData, handleInputChange, handleImageUpload, setFormData } =
    useForm(initialMaterial);
  const { checked, handleCheckbox } = useCheckbox(checkboxes);
  const axiosPrivate = useAxiosPrivate();

  async function postFormData(formData) {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      const result = await axiosPrivate.post("/materials", formData, config);
      return result.data;
    } catch (err) {
      console.log(err);
    } finally {
      setFormData(initialMaterial);
    }
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const result = await postFormData(formData);
    console.log(result);
  };

  return (
      <div className="MaterialFormContainer">
        <form className="MaterialForm">
          <label>
            Name of Material
            <input
              name="material_name"
              type="text"
              placeholder="Material name"
              value={formData.material_name}
              onChange={handleInputChange}
            ></input>
          </label>
          <label>
            Describe the materials
            <input
              name="material_description"
              type="text"
              placeholder="Uses, quality, color, type, etc."
              value={formData.material_description}
              onChange={handleInputChange}
            ></input>
          </label>
          <label>
            Amount available
            <input
              name="material_unit"
              type="text"
              placeholder="Weight, length, height, etc."
              value={formData.material_unit}
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
                  name="phone_number"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone_number}
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
          <label for="image">
            Upload a photo
            <input type="file" name="image" onChange={handleImageUpload} />
          </label>
        </form>
        <button onClick={handleSubmit}>Submit Material</button>
      </div>
  );
}
