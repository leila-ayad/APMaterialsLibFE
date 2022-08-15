import React, { useState } from "react";
import axios from "../api/axios";
import useForm from "../Hooks/useForm";

const initialRegister = {
  email: "",
  name: "",
  password: "",
  password2: "",
  pronouns: "",
  username: "",
};

export default function Register(props) {
  const [errors, setErrors] = useState({});
  const { formData, handleInputChange } = useForm(initialRegister)

  const submitRegistration = () => {
    const newMember = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      name: formData.name,
      pronouns: formData.pronouns,
    };
    axios
      .post("/auth/register", newMember)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
        //username already taken error
      })
  };

  //this function doesn't work right yet. If it puts up the error message it doesn't get rid of it until the form is submitted instead of when the error is fixed
  //maybe set the errors to an empty string on each click. 
  const validate = () => {
    let formIsValid = true;
    //there are different options for the mailFormat regex. This one is working (7/20/2022)
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    
    if (
      !formData.username ||
      !formData.password ||
      !formData.password2 ||
      !formData.name ||
      !formData.email ||
      !formData.pronouns
    ) {
      formIsValid = false;
      setErrors({ ...errors, emptyField: "Please fill out all fields" });
      console.log(errors);
    }
    if (formData.password !== formData.password2) {
      formIsValid = false;
      setErrors({ ...errors, password: "Passwords do not match" });
    }
    //this one "takes over" the errors object. If the email isn't correct other errors don't trigger
    if (!formData.email.match(mailFormat)) {
      formIsValid = false;
      setErrors({ ...errors, email: "Email must be valid" });
    } 
    return formIsValid;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (validate()) {
      submitRegistration();
      setErrors("");
    }
  };

  return (
    <div>
      <h2>Welcome to the Picnic!</h2>
      <p>All you have to do is fill out the form below. Happy Creating!</p>
      <form className="RegisterForm" onSubmit={onSubmit}>
        <div className="ErrorMsg">{errors.emptyField}</div>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <div className="ErrorMsg">{errors.username}</div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          name="password2"
          type="password"
          placeholder="Re-type Password"
          value={formData.password2}
          onChange={handleInputChange}
        />
        <div className="ErrorMsg">{errors.password}</div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          name="pronouns"
          type="text"
          placeholder="Pronouns"
          value={formData.pronouns}
          onChange={handleInputChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="ErrorMsg">{errors.email}</div>
        <button className="RegisterButton">Register New User!</button>
      </form>
    </div>
  );
}
