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
        to="/AdminHome/Dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={activeLink === "Add Bus" ? "active-link" : "not-active-link"}
        onClick={() => setActiveLink("Add Bus")}
        to="/AdminHome/AddBus"
      >
        Add Bus
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
