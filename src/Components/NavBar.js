import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import useAuth from "../Hooks/useAuth";



export default function Navbar() {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate()

  const id = auth.memberId

  const handleLogout = () => {
    console.log(auth.accessToken)
    axiosPrivate.get("/auth/logout").then((resp) => {
      console.log(resp?.data)
    })
  }
  return (
    <nav className="nav">
      <Link to="/" className="SiteTitle">
        Materials Library
      </Link>
      <ul>

        <CustomLink to="/materials">Materials</CustomLink>
        <CustomLink to={`${id}/your-materials`}>My Materials</CustomLink>
        <CustomLink to="/newMaterial">New Material</CustomLink>
        {auth.accessToken ? (
          <CustomLink onClick={handleLogout} to="/">Logout</CustomLink>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
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
