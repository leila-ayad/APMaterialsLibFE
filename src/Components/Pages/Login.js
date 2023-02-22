import React, { useEffect } from "react";
import axios from "../../api/axios";
import useAuth from "../../Hooks/useAuth";
import useForm from "../../Hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";
import useMessage from "../../Hooks/useMessage";

// to complete form create update & submit functions and create formValues
const initialUser = { username: "", password: "" };

export default function Login(props) {

  const { formData, handleInputChange } = useForm(initialUser);
  const { setAuth } = useAuth();
  const { message, setMessage, removeMessage } = useMessage()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/materials";

  useEffect( () => {
    if (message === "successfully logged out") {
      removeMessage()
    }
}, [message, removeMessage])


  const submitLogin = () => {
    removeMessage()
    const newUser = {
      username: formData.username,
      password: formData.password,
    };
    axios
      .post("/auth/login", newUser)
      .then((resp) => {
        const accessToken = resp?.data?.accessToken;
        const memberId = resp?.data?.member_id;
        const username = resp?.data?.username;
        setAuth({ accessToken, memberId, username });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        if (!err?.response) {
          setMessage("No server response");
        } else if (err.response?.status === 400) {
          setMessage("Missing username or password");
        } else if (err.response?.status === 401) {
          setMessage("Unauthorized");
        } else {
          setMessage("Login Failed");
        }
        setMessage(err.response.data.message);
      })
      .finally(() => {});
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submitLogin();
  };

  return (
    <div className="LoginContainer">
      <p>{message}</p>
      <h2> Log In!</h2>
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
          <button className="Button">Let's Go!</button>
        </div>
      </form>
      <div>
      <a href="/register">Create New User</a> |{" "}
      <a href="/help">Forgot Password?</a>
      </div>

    </div> 
  );
}
