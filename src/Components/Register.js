import React, { useState } from "react";
import axios from "axios";

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
  const [registerValues, setRegisterValues] = useState(initialRegister);

  const updateRegisterForm = (inputName, inputValue) => {
    setRegisterValues({ ...registerValues, [inputName]: inputValue });
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    updateRegisterForm(name, value);
  };

  const submitRegistration = () => {
    const newMember = {
      username: registerValues.username,
      password: registerValues.password,
      email: registerValues.email,
      name: registerValues.name,
      pronouns: registerValues.pronouns,
    };
    axios
      .post("http://localhost:9000/api/auth/register", newMember)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
        //username already taken error
      })
      .finally(() => {
        setRegisterValues(initialRegister);
      });
  };

  //this function doesn't work right yet. If it puts up the error message it doesn't get rid of it until the form is submitted instead of when the error is fixed
  //maybe set the errors to an empty string on each click. 
  const validate = () => {
    let formIsValid = true;
    //there are different options for the mailFormat regex. This one is working (7/20/2022)
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    
    if (
      !registerValues.username ||
      !registerValues.password ||
      !registerValues.password2 ||
      !registerValues.name ||
      !registerValues.email ||
      !registerValues.pronouns
    ) {
      formIsValid = false;
      setErrors({ ...errors, emptyField: "Please fill out all fields" });
      console.log(errors);
    }
    if (registerValues.password !== registerValues.password2) {
      formIsValid = false;
      setErrors({ ...errors, password: "Passwords do not match" });
    }
    //this one "takes over" the errors object. If the email isn't correct other errors don't trigger
    if (!registerValues.email.match(mailFormat)) {
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
          value={registerValues.username}
          onChange={onChange}
        />
        <div className="ErrorMsg">{errors.username}</div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={registerValues.password}
          onChange={onChange}
        />
        <input
          name="password2"
          type="password"
          placeholder="Re-type Password"
          value={registerValues.password2}
          onChange={onChange}
        />
        <div className="ErrorMsg">{errors.password}</div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={registerValues.name}
          onChange={onChange}
        />
        <input
          name="pronouns"
          type="text"
          placeholder="Pronouns"
          value={registerValues.pronouns}
          onChange={onChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={registerValues.email}
          onChange={onChange}
        />
        <div className="ErrorMsg">{errors.email}</div>
        <button className="RegisterButton">Register New User!</button>
      </form>
    </div>
  );
}
