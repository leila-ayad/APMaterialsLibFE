import React, {useState} from "react";
import axios from "axios";



// to complete form create update & submit functions and create formValue SoS
const initialUser = { username: "", password: "" };


export default function Login(props) {
  const [loginValues, setLoginValues] = useState(initialUser);
  const [loginError, setLoginError] = useState("");

  const updateLoginForm = (inputName, inputValue) => {
    setLoginValues({ ...loginValues, [inputName]: inputValue });
  };

  const submitLogin = () => {
    const newUser = {
      username: loginValues.username,
      password: loginValues.password,
    };
    axios
      .post("http://localhost:9000/api/auth/login", newUser)
      .then((resp) => {
        console.log(resp.data);
        //the jwt will show up here. This where I need to set the "Auth" state to the token which had a provider
        setLoginError(resp.data.message);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setLoginError(err.response.data.message);
      })
      .finally(() => {});
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    updateLoginForm(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submitLogin();
  };

  return (
    <div className="LoginContainer">
      <h2> Log In!</h2>
      <div>{loginError}</div>
      <form className="LoginForm" onSubmit={onSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={loginValues.username}
          onChange={onChange}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={loginValues.password}
          onChange={onChange}
        ></input>
        <div>
          <button className="LoginButton">Let's Go!</button>
        </div>
      </form>
      <a href="link here">Create New User</a> | {" "}
      <a href="link here">Forgot Password?</a>
    </div>
  );
}
