import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ userType }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">
        <Link to={userType === "admin" ? "/admin" : "/user"}>MicroFinance</Link>
      </div>
      <div className="space-x-4">
        {userType === "admin" ? (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/loans">Loans</Link>
          </>
        ) : (
          <>
            <Link to="/user">Dashboard</Link>
            <Link to="/user/loans">Loans</Link>
          </>
        )}
      </div>
    </nav>
  );
}
