import React from "react";
import "./Admin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vid from "../../../Assets/vid.webm";
const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = () => {
    if (username === "abc" && password === "123") {
      alert("success");
    } else {
      alert("invalid");
    }
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "100vh",
        fontFamily: "mars",
      }}
    >
      <button
        className="login-back-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <video
          src={vid}
          autoPlay
          loop
          playsInline
          className="admin-vid"
        ></video>
        Go Back
      </button>
      <h1 style={{ position: "fixed", top: "9.7rem", left: "37rem" }}>
        Admin Login
      </h1>
      <form action="" className="form">
        <div className="login">
          <label htmlFor="">Username &nbsp;</label>
          <input
            type="text"
            placeholder="Username"
            style={{ height: "1.8rem", padding: "1rem", fontSize: "1rem" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /> <br /> <br />
          <label htmlFor="">Password &nbsp;</label>
          <input
            type="password"
            placeholder="Password"
            style={{ height: "1.8rem", padding: "1rem", fontSize: "1rem" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <br />
          <button
            className="login-btn"
            onClick={auth}
            style={{
              position: "relative",
              left: "1rem",
              width: "5.5rem",
              height: "2rem",
              top: "1.8rem",
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
