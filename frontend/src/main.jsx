import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./components/User/User.jsx";
import Admin from "./components/Admin/Admin.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import ManageUser from "./components/Admin/content/ManageUser.jsx";
import DashBoard from "./components/Admin/content/DashBoard.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* index routes */}
        <Route index element={<HomePage />} />
        <Route path="users" element={<User />} />
      </Route>
      <Route path="/admins" element={<Admin />}>
        <Route index element={<DashBoard />} />
        <Route path="manage-user" element={<ManageUser />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
