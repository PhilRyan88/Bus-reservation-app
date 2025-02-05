import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing/LandingPage";
import Admin from "./components/Login/Admin/Admin";
import User from "./components/Login/User/User";
import AdminSignup from "./components/Login/Admin/AdminSignup";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AdminLogin" element={<Admin />} />
          <Route path="/UserLogin" element={<User />} />
          <Route path="/SignUp" element={<AdminSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
