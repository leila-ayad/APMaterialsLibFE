import { useState } from "react";

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleImageUpload = (evt) => {
    setFormData( {  ...formData, [evt.target.name]: evt.target.files[0] })  
  }

  return { formData, handleInputChange, handleImageUpload };
};

export default useForm;