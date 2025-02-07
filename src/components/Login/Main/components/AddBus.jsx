import React from "react";
import { useState, useEffect } from "react";
import "../styles/AdminHome.css";
import axios from "axios";
const AddBus = () => {
  const [bus, setBus] = useState({
    name: "",
    from: "",
    to: "",
    departure: "",
    arrival: "",
    seats: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setBus((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  async function sendData() {
    try {
      await axios
        .post("http://localhost:5000/buses", bus)
        .then((elem) => console.log(elem));
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="Add-Bus">
      <form action="" className="Add-bus-form">
        <label htmlFor="">Bus Name</label>
        <input
          type="text"
          placeholder="  Enter Bus Name"
          value={bus.name}
          onChange={handleChange}
          required
          name="name"
        />

        <label htmlFor="">From</label>
        <input
          type="text"
          placeholder=" From Location"
          value={bus.from}
          onChange={handleChange}
          required
          name="from"
        />
        <label htmlFor="">To</label>
        <input
          type="text"
          placeholder="  To Location"
          value={bus.to}
          onChange={handleChange}
          required
          name="to"
        />
        <label htmlFor="">Departure Time :</label>
        <input
          type="time"
          placeholder="  Search Here"
          value={bus.departure}
          onChange={handleChange}
          required
          name="departure"
        />
        <label htmlFor="">Arrival Time</label>
        <input
          type="time"
          placeholder="  Search Here"
          value={bus.arrival}
          onChange={handleChange}
          required
          name="arrival"
        />
        <label htmlFor="">Available Seats</label>
        <input
          type="number"
          placeholder="  Available Seats"
          value={bus.seats}
          onChange={handleChange}
          required
          name="seats"
        />
        <center>
          {" "}
          <button style={{ marginTop: "0.8rem" }} onClick={sendData}>
            Submit
          </button>
        </center>
      </form>
    </div>
  );
};

export default AddBus;
