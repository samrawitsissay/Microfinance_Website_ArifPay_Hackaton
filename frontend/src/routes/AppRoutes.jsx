import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Admin from "../pages/admin/Admin";
import AdminLoans from "../pages/admin/AdminLoans";
import User from "../pages/user/User";
import UserLoans from "../pages/user/UserLoans";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/loans" element={<AdminLoans />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/loans" element={<UserLoans />} />
      </Routes>
    </Router>
  );
}
