import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import useAuth from "../Hooks/useAuth";
import useMessage from "../Hooks/useMessage"

export default function Navbar() {
  const { auth, setAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { message, setMessage, removeMessage } = useMessage()
  const id = auth.memberId;

  const handleLogout = () => {
    axiosPrivate.get("/auth/logout").then((resp) => {
      setAuth({});
      setMessage(resp?.data)
    });
  };

  const updateMessage = () => {
   auth?.accessToken ? setMessage(null) : 
    setMessage("You must login to view this page")
  }

  return (
    <nav className="nav">
      <Link to="/dashboard" className="SiteTitle">
        Dashboard{" "}
      </Link>
      <ul>
        <CustomLink onClick={updateMessage} to="/materials">Materials</CustomLink>
        <CustomLink onClick={updateMessage} to={id ? `${id}/your-materials` : `/materials`}>My Materials</CustomLink>
        <CustomLink onClick={updateMessage} to="/newMaterial">New Material</CustomLink>
        {auth.accessToken ? (
          <CustomLink onClick={handleLogout}  to="/">
            Logout
          </CustomLink>
        ) : (
          <CustomLink  onClick={removeMessage} to="/login">Login</CustomLink>
        )}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
