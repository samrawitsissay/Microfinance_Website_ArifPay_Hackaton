import React from "react";
import { LayoutDashboard, Users, FileBarChart, HandCoins, Settings, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { path: "/admin", icon: <LayoutDashboard size={20} />, label: "Overview" },
    { path: "/admin/loans", icon: <HandCoins size={20} />, label: "Loans" },
    { path: "/admin/users", icon: <Users size={20} />, label: "User Management" },
    { path: "/admin/reports", icon: <FileBarChart size={20} />, label: "Reports" },
    { path: "/admin/settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <div className="bg-indigo-800 text-white w-64 h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-center text-2xl font-bold py-6 border-b border-indigo-700">
          Microfinance Admin
        </h2>
        <ul className="mt-4 space-y-1">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-6 py-3 transition ${
                    isActive ? "bg-indigo-700" : "hover:bg-indigo-700"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => navigate("/login")}
        className="px-6 py-4 border-t border-indigo-700 flex items-center space-x-3 cursor-pointer hover:bg-indigo-700"
      >
        <LogOut />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
