import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Admin from "../pages/admin/AdminDashboard";
import AdminLoans from "../pages/admin/AdminLoans";
import User from "../pages/user/User";
import UserLoans from "../pages/user/UserLoans";
import LandingPage from "../pages/LandingPage";
import Notifications from "../pages/user/Notification"; 
import Profile from "../pages/user/Profile"; 
import LoanApplicationForm from "../pages/user/LoanApplicationForm";
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
       
         <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/loans" element={<AdminLoans />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/loans" element={<UserLoans />} />
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<User />} /> */}
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
       <Route path="/loan-form" element={<LoanApplicationForm />} />

      </Routes>
    </Router>
  );
}
