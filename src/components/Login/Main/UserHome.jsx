import React from "react";
import ViewBus from "./UserComponents/ViewBus";
import View from "./UserComponents/View";
import { Route, Routes } from "react-router-dom";

const UserHome = () => {
  return (
    <div>
      UserHome
      <ViewBus />
      <Routes>
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </div>
  );
};

export default UserHome;
