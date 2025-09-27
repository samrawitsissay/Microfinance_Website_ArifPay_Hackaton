import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10 text-center">
      &copy; {new Date().getFullYear()} MicroFinance App. All rights reserved.
    </footer>
  );
}
