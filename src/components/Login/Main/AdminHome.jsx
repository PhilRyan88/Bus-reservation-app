import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/AdminHome.css";
import vid from "../../../Assets/vid3.webm";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddBus from "./components/AddBus";
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

      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddBus" element={<AddBus />} />
      </Routes>
    </div>
  );
};

export default AdminHome;
