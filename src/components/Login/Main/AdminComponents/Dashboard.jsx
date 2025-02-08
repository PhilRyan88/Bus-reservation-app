import React, { useState, useEffect } from "react";
import "../styles/AdminHome.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router";

const Dashboard = () => {
  const [details, setDetails] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:5000/buses");
      setDetails(response.data);
    } catch (err) {
      console.error(err);
    }
  }
  // console.log(location);
  return (
    <div className="Dashboard-parent">
      <table className="dash" border="0" cellSpacing="5px">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Bus Image</th>
            <th>Bus Name</th>
            <th>From</th>
            <th>To</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Available Seats</th>
            <th>View</th>
            <th>Edit</th>
          </tr>
          {details.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>
                  <img className="bus-img" src={elem.image} alt="Bus" />
                </td>
                <td>{elem.name}</td>
                <td>{elem.from}</td>
                <td>{elem.to}</td>
                <td>{elem.departure}</td>
                <td>{elem.arrival}</td>
                <td>{elem.seats}</td>
                <td>
                  <Link state={elem} to={`/AdminHome/ViewBus/${elem.id}`}>
                    <button>View</button>
                  </Link>
                </td>
                <td>
                  <Link state={elem} to={`/AdminHome/EditBus/${elem.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
