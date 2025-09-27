import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import "./AuthPages.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // Mock reset
    alert(`Reset link sent to ${email}`);
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <img
          src="/assets/forgot-password.png"
          alt="Forgot Password Illustration"
          className="object-contain h-4/5"
        />
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center">
        <div className="w-full max-w-md p-10 bg-white rounded-xl shadow-lg border border-purple-100">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-2">
            Forgot Password
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Enter your email to receive reset instructions
          </p>

          <form onSubmit={handleReset} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Send Reset Link
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Remembered your password?{" "}
            <button
              type="button"
              className="text-purple-600 font-semibold hover:underline"
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
