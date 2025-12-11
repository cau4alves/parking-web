import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ActiveCars from "./pages/ActiveCars";
import RegisterEntry from "./pages/RegisterEntry";
import RegisterExit from "./pages/RegisterExit";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/active-cars" element={<ActiveCars />} />
      <Route path="/register-entry" element={<RegisterEntry />} />
      <Route path="/register-exit" element={<RegisterExit />} />
    </Routes>
  );
}
