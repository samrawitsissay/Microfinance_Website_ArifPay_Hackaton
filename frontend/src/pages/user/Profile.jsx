import React from "react";
import Footer from "../../components/common/Footer.jsx";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const userProfile = {
    name: "Abebe Alemu",
    email: "abebe@example.com",
    phone: "+251 911 123456",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">Profile</h1>
          <Button onClick={() => navigate("/user")}>Back to Dashboard</Button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-700"><strong>Name:</strong> {userProfile.name}</p>
          <p className="text-gray-700"><strong>Email:</strong> {userProfile.email}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {userProfile.phone}</p>
        </div>
      </div>

      
      <Footer />
    </div>
  );
}
