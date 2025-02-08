import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing/LandingPage";
import Admin from "./components/Login/Admin/Admin";
import User from "./components/Login/User/User";
import AdminSignup from "./components/Login/Admin/AdminSignup";
import AdminHome from "./components/Login/Main/AdminHome";
import UserSignup from "./components/Login/User/UserSignup";
import UserHome from "./components/Login/Main/UserHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AdminLogin" element={<Admin />} />
          <Route path="/UserLogin" element={<User />} />
          <Route path="/UserSignup" element={<UserSignup />} />
          <Route path="/SignUp" element={<AdminSignup />} />
          <Route path="/AdminHome/*" element={<AdminHome />} />
          <Route path="/UserHome/*" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
