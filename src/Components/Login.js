import React, { useState } from "react";
import axios from "../api/axios";
import useAuth from "../Hooks/useAuth";
import useForm from "../Hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";

// to complete form create update & submit functions and create formValues
const initialUser = { username: "", password: "" };

export default function Login(props) {
  const [loginError, setLoginError] = useState("");
  const { formData, handleInputChange } = useForm(initialUser);
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const submitLogin = () => {
    const newUser = {
      username: formData.username,
      password: formData.password,
    };
    axios
      .post("/auth/login", newUser)
      .then((resp) => {
        console.log(resp?.data);
        const accessToken = resp?.data?.accessToken;
        const memberId = resp?.data?.member_id;
        const username = resp?.data?.username;
        setAuth({ accessToken, memberId, username });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        if (!err?.response) {
          setLoginError("No server response");
        } else if (err.response?.status === 400) {
          setLoginError("Missing username or password");
        } else if (err.response?.status === 401) {
          setLoginError("Unauthorized");
        } else {
          setLoginError("Login Failed");
        }
        console.log(err.response.data.message);
        setLoginError(err.response.data.message);
      })
      .finally(() => {});
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
          value={formData.username}
          onChange={handleInputChange}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        ></input>
        <div>
          <button className="LoginButton">Let's Go!</button>
        </div>
      </form>
      <a href="/register">Create New User</a> |{" "}
      <a href="link here">Forgot Password?</a>
    </div>
  );
}
