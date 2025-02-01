import React from "react";
import { useState } from "react";
import axios from "axios";
const AdminSignup = () => {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    let { name, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState, //it holds the old data
      [name]: value,
    })); //[name] an array, cuz name property is present in multiple input tags
  }

  function sendData() {
    axios.post("http://localhost:5000/admins", admin).then((elem) => {
      console.log(elem);
      alert("Admin Registered");
    });
  }
  return (
    <div>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        value={admin.name}
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="">Email: </label>
      <input
        type="text"
        name="email"
        value={admin.email}
        onChange={handleChange}
      />
      <label htmlFor="">Password: </label>
      <input
        type="password"
        name="password"
        value={admin.password}
        onChange={handleChange}
      />
      <button onClick={sendData}>Login</button>
    </div>
  );
};

export default AdminSignup;
