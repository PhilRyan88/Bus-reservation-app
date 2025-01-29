import React from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        color: "white",
      }}
    >
      <section>
        <div
          className="admin"
          style={{ position: "fixed", top: "3rem", right: "30rem" }}
        >
          <h1 style={{ fontFamily: "Mars " }}>This is Admin Login</h1>
          <button onClick={() => navigate(-1)}>Home</button>
        </div>
      </section>
    </div>
  );
};

export default Admin;
