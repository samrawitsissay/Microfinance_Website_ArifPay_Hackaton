import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-10 border-t border-gray-200">
      <p>
        © {new Date().getFullYear()} <span className="text-green-700 font-semibold">MicroFinance Platform</span> — Empowering Financial Growth.
      </p>
    </footer>
  );
}