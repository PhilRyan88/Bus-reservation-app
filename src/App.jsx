import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing/LandingPage";
import Admin from "./components/Login/Admin/Admin";
import User from "./components/Login/User/User";
import AdminSignup from "./components/Login/Admin/AdminSignup";
import AdminHome from "./components/Login/Main/AdminHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AdminLogin" element={<Admin />} />
          <Route path="/UserLogin" element={<User />} />
          <Route path="/SignUp" element={<AdminSignup />} />
          <Route path="/AdminHome/*" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
