import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar () {

    return(
        <nav className="nav">
            <Link to="/" className="site-title">Materials Library</Link>
            <ul>
                <CustomLink to="/materials">Materials</CustomLink>
                <CustomLink to="/newMaterial">New Material</CustomLink>
                <CustomLink to="/logout">Logout</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}
