import React from "react";
import { useState } from "react";
import axios from "axios";

const UserSignup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    let { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function sendData() {
    axios
      .post("http://localhost:5000/users", user)
      .then((elem) => {
        console.log(elem);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        value={user.name}
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="">Email: </label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <label htmlFor="">Password: </label>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <button onClick={sendData}>Login</button>
    </div>
  );
};

export default UserSignup;
