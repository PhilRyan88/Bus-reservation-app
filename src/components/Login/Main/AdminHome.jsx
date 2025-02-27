import React from "react";
import Header from "./AdminComponents/Header";
import Sidebar from "./AdminComponents/Sidebar";
import "./styles/AdminHome.css";
import vid from "../../../Assets/vid3.webm";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./AdminComponents/Dashboard";
import AddBus from "./AdminComponents/AddBus";
import ViewBus from "./AdminComponents/ViewBus";
import EditBus from "./AdminComponents/EditBus";
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
        <Route path="/viewBus/:id" element={<ViewBus />} />
        <Route path="/EditBus/:id" element={<EditBus />} />
      </Routes>
    </div>
  );
};

export default AdminHome;
