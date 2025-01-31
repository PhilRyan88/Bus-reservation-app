import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing/LandingPage";
import Admin from "./components/Login/Admin/Admin";
import User from "./components/Login/User/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AdminLogin" element={<Admin />} />
          <Route path="/UserLogin" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
