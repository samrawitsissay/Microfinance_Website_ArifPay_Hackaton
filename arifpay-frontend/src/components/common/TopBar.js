import React from "react";
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TopBar({ userName, notifications }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6">
      {/* Greeting */}
      <h2 className="text-xl font-semibold text-gray-700">Hello, {userName}</h2>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Bell Icon -> Notifications */}
        <button
          className="relative"
          onClick={() => navigate("/notifications")}
        >
          <Bell size={24} className="text-gray-700" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              {notifications}
            </span>
          )}
        </button>

        {/* User Icon -> Profile */}
        <button onClick={() => navigate("/profile")}>
          <User size={24} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
}