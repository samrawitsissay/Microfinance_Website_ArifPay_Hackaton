import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { mockUsers } from "../../data/mockUsers";

export default function Login() {
  const [userType, setUserType] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = mockUsers.find(
      (u) =>
        u.username === username &&
        u.password === password &&
        u.role === userType
    );
    if (user) {
      if (user.role === "admin") navigate("/admin");
      else navigate("/user");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/microfinance.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Dark overlay */}
      </div>

      {/* ===== Login Card ===== */}
      <div className="flex flex-1 items-center justify-center relative z-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold mb-2 text-center text-green-600">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-6">Log into your account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* User Type */}
            <div>
              <select
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Username */}
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <button
                type="button"
                className="text-green-600 hover:underline"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign In
            </Button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              className="text-green-600 font-semibold hover:underline"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
