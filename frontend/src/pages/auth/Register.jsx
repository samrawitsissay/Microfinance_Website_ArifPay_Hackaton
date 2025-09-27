import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import "./AuthPages.css"; // custom CSS for extra styling

export default function Register() {
  const [userType, setUserType] = useState("user");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Mock registration logic
    alert(`Registered as ${userType}: ${username}`);
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-pink-50 to-pink-100">
      {/* Left Image / Illustration */}
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <img
          src="/assets/register-illustration.png"
          alt="Register Illustration"
          className="object-contain h-4/5"
        />
      </div>

      {/* Right Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center">
        <div className="w-full max-w-md p-10 bg-white rounded-xl shadow-lg border border-pink-100">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Join us and start your journey
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* User Type */}
            <select
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            {/* Username */}
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {/* Register Button */}
            <Button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Sign Up
            </Button>
          </form>

          {/* Already have account */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <button
              type="button"
              className="text-pink-600 font-semibold hover:underline"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
