import React, { useEffect, useState } from "react";
import "../styles/AdminHome.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const EditBus = () => {
  const location = useLocation();
  const [bus, setBus] = useState(location.state);

  const deleteData = async () => {
    try {
      await axios.delete(`http://localhost:5000/buses/${bus.id}`);
      setBus(null);
    } catch (err) {
      console.log(err);
    }
  };

  if (!bus) {
    return <h2>Bus has been deleted.</h2>;
  }

  return (
    <div className="edit-bus">
      <table className="table-edit" cellSpacing="25px">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Bus Image</th>
            <th>Bus Name</th>
            <th>From</th>
            <th>To</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Seats</th>
            <th></th>
          </tr>
          <tr>
            <td>{bus.id}</td>
            <td>
              <img src={bus.image} alt="" />
            </td>
            <td>{bus.name}</td>
            <td>{bus.from}</td>
            <td>{bus.to}</td>
            <td>{bus.departure}</td>
            <td>{bus.arrival}</td>
            <td>{bus.seats}</td>
            <td>
              <button>Edit</button>
            </td>
            <td>
              <button onClick={deleteData}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EditBus;
