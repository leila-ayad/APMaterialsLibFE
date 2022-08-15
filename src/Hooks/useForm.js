import { useState } from "react";

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  return { formData, handleInputChange };
};

export default useForm;
