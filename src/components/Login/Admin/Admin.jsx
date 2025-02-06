import React, { useEffect } from "react";
import "./Admin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import vid from "../../../Assets/vid.webm";
// import data from "../../../Database/listOfAdmins.json";
import axios from "axios";
const Admin = () => {
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    userData();
  }, []);

  async function userData() {
    try {
      await axios.get("http://localhost:5000/admins").then((elem) => {
        console.log(elem);
        setUser(elem.data);
      });
    } catch (err) {
      console.log(err);
    }
  }

  const auth = () => {
    const foundAdmin = user.find(
      (elem) => elem.name === username && elem.password === password
    );
    if (foundAdmin) {
      alert("Login successful");
      navigate("/AdminHome");
    } else {
      alert("Sign up first");
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
          <button
            style={{
              position: "relative",
              left: "rem",
              width: "5.5rem",
              height: "2rem",
              top: "1.8rem",
            }}
            className="login-btn"
            onClick={() => {
              navigate("/SignUp");
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
