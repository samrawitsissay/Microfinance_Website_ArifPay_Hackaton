import React from "react";

export default function Card({ children }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      {children}
    </div>
  );
}