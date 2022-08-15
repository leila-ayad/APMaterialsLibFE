import { useState } from "react";

const useCheckbox = (initialState) => {
  const [checked, setChecked] = useState(initialState);

  const handleCheckbox = (name, value) => {
    setChecked({ ...checked, [name]: !value });
    console.log(checked);
  };

  return { checked, handleCheckbox };
};

export default useCheckbox;
