import React from "react";
import "./User.css";
import { useState } from "react";
import { toast } from "react-toastify";
const User = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = () => {
    if (username === "abc" && password === "123") {
      toast.success("success", {
        duration: 165565000,
      });
    } else {
      toast.warn("invalid", {
        duration: 1551500,
      });
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
      <h1>User Login</h1>
      <form action="" className="form">
        <div className="login">
          <label htmlFor="">Username &nbsp;</label>
          <input
            type="text"
            placeholder="Username"
            style={{ height: "1.8rem" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /> <br />
          <label htmlFor="">Password &nbsp;</label>
          <input
            type="password"
            placeholder="Password"
            style={{ height: "1.8rem" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <br />
          <button
            onClick={auth}
            style={{
              position: "relative",
              left: "4.3rem",
              width: "4.5rem",
              height: "1.8rem",
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default User;
