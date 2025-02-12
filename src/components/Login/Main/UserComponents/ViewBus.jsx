import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/UserHome.css";
import { NavLink } from "react-router-dom";

const ViewBus = () => {
  const [bus, setBus] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/buses")
      .then((elem) => {
        console.log(elem);
        setBus(elem.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //   console.log(bus);

  return (
    <div className="user-view-bus">
      <b>Available Buses :</b>
      {bus.map((elem) => {
        return (
          <React.Fragment key={elem.id}>
            <div className="bus-list-user">
              <NavLink to={`/UserHome/view/${elem.id}`} state={elem}>
                <span>
                  {elem.name}
                  <img src={elem.image} alt="" height="90px" />
                </span>
              </NavLink>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ViewBus;
