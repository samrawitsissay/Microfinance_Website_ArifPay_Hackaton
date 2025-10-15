// src/components/common/TopBar.jsx
import React from "react";
import { Bell, User } from "lucide-react";

export default function TopBar({ userName = "Abebe Tesfaye", notifications = 3 }) {
  return (
    <div className="flex justify-end items-center mb-6 space-x-4">
      {/* Notifications */}
      <button className="relative text-gray-700 hover:text-green-700">
        <Bell size={24} />
        {notifications > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {notifications}
          </span>
        )}
      </button>

      {/* Profile */}
      <button className="flex items-center text-gray-700 hover:text-green-700 space-x-2">
        <User size={24} />
        <span className="hidden md:inline">{userName}</span>
      </button>
    </div>
  );
}
