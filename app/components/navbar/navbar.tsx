import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router";
import LogoutButton from "../loginComponents/LogoutButton";
import LoginButton from "../loginComponents/LoginButton";
import "./navbar.css";


const NavBar: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return (
        <nav className="navbar">
          <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Case System</div>
        </nav>
      );
    }


  return (
    <nav className="navbar">
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Case System</div>
      <ul className="navbar-ul">
        <li>
          <NavLink className="navbar-link" to="/">
            Home
          </NavLink>
        </li>
        {isAuthenticated && user ? (
          <li>
            <NavLink className="navbar-link" to="/cases">
              Cases
            </NavLink>
          </li>
        ):null}
        {isAuthenticated && user ? (
          <li>
            <NavLink className="navbar-link" to="/profile">
              Profile
            </NavLink>
          </li>
        ):null}
        <li>
          <NavLink className="navbar-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/contact">
            Contact
          </NavLink>
        </li>
        {isAuthenticated && user ? <LogoutButton isOnNavbar={true} /> : <LoginButton isOnNavbar={true} />}
      </ul>
    </nav>
  );
};

export default NavBar;
