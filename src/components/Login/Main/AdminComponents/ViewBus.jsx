import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/AdminHome.css";

const ViewBus = () => {
  var location = useLocation();
  var bus = location.state;
  console.log(location);

  return (
    <div className="view-bus">
      {<img src={bus.image} alt="" />}
      <b>{bus.name}</b>
    </div>
  );
};

export default ViewBus;
