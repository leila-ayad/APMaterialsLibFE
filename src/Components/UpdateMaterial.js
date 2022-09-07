import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import useCheckbox from "../Hooks/useCheckbox";
import useForm from "../Hooks/useForm";

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

export default function UpdateMaterial({
  material,
  show,
  setShow,
  setMessage,
}) {
  const { formData, handleInputChange, handleImageUpload, setFormData } =
    useForm(initialMaterial);

  const { checked, handleCheckbox } = useCheckbox(checkboxes);

  const axiosPrivate = useAxiosPrivate();

  const materialId = material.material_id;

  const updateMaterial = () => {
    axiosPrivate
      .put(`materials/${materialId}`, formData)
      .then((resp) => {
        setMessage(resp.data.message);
      });
    setShow(false);
    setFormData("");
  };

  const cancelUpdate = () => {
    setShow(false);
    setFormData(material);
  };

  if (!show) {
    return <></>;
  }

  return (
    <div className="overlay">
      <form className="updateForm">
        <label>
          Name of Material
          <input
            name="material_name"
            type="text"
            placeholder={material.material_name}
            value={formData.material_name}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>
          Describe the materials
          <input
            name="material_description"
            type="text"
            placeholder={material.material_description}
            value={formData.material_description}
            onChange={handleInputChange}
          ></input>
        </label>
        <label>
          Amount available
          <input
            name="material_unit"
            type="text"
            placeholder={material.material_unit}
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
                placeholder={material.phone_number}
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
                placeholder={material.email}
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
          <input type="file" name="image" onChange={handleImageUpload} />
        </label>
      </form>
      <button onClick={cancelUpdate}>Cancel Update</button>
      <button onClick={updateMaterial}>Update Material</button>
    </div>
  );
}
