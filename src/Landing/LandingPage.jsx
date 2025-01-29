import React from "react";
import { Link } from "react-router-dom";
import admin from "../Assets/admin.png";
import vid from "../Assets/vid2.mp4";
import user from "../Assets/user.png";

import "./Landing.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <video
        className="video"
        src={vid}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="home">
        <div className="box">
          <Link className="first" to="/AdminLogin">
            <div className="img">
              <img src={admin} alt="" />
              <h2 style={{ fontFamily: "reospec" }}>Admin Login</h2>
            </div>
          </Link>
          <Link className="second" to="/UserLogin">
            <div className="img">
              <img src={user} alt="" />
              <h2 style={{ fontFamily: "reospec" }}>User Login</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
