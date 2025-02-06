import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/AdminHome.css";
import vid from "../../../Assets/vid3.webm";
const AdminHome = () => {
  return (
    <div className="AdminHome">
      <video
        className="dash-vid"
        src={vid}
        playsInline
        autoPlay
        loop
        muted
      ></video>
      <Header />
      <Sidebar />
    </div>
  );
};

export default AdminHome;
