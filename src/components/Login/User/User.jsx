import React from "react";
import "./User.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const User = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  });

  async function getData() {
    try {
      axios.get("http://localhost:5000/users").then((elem) => {
        setUser(elem.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const foundUser = user.find(
    (elem) => elem.name === username && elem.password === password
  );
  const auth = () => {
    if (foundUser) {
      alert("Login Successful");
      navigate("/UserHome");
    } else {
      alert("Invalid");
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
        Go Back
      </button>
      <h1 style={{ position: "fixed", top: "9.7rem", left: "37rem" }}>
        User Login
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
          <button
            className="login-btn"
            onClick={() => navigate("/UserSignup")}
            style={{
              position: "relative",
              left: "2rem",
              width: "5.5rem",
              height: "2rem",
              top: "1.8rem",
            }}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
