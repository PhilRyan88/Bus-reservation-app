import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="navbar-parent">
      <section className="navbar">
        <h2 style={{ color: "white" }}>
          <i style={{ color: "greenyellow" }}>Air</i> Bus
        </h2>
        <button> Connect</button>
      </section>
    </div>
  );
};

export default Header;
