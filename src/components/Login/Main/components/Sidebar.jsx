import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="sidebar-parent">
      <NavLink
        className={
          activeLink === "Dashboard" ? "active-link" : "not-active-link"
        }
        onClick={() => setActiveLink("Dashboard")}
      >
        Dashboard
      </NavLink>
      <NavLink
        className={activeLink === "About" ? "active-link" : "not-active-link"}
        onClick={() => setActiveLink("About")}
      >
        About
      </NavLink>
      <NavLink
        className={activeLink === "Contact" ? "active-link" : "not-active-link"}
        onClick={() => setActiveLink("Contact")}
      >
        Contact
      </NavLink>
      <NavLink
        to={"/"}
        className={activeLink === "Logout" ? "active-link" : "not-active-link"}
        onClick={() => setActiveLink("Logout")}
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Sidebar;
