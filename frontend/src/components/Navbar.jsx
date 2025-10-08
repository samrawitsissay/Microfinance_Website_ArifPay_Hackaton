import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* === LOGO === */}
        <h1
          onClick={() => scrollToSection("home")}
          className={`text-2xl font-bold cursor-pointer ${
            scrolled ? "text-green-700" : "text-white"
          }`}
        >
          Mic.fin
        </h1>

        {/* === NAV LINKS === */}
        <div className="hidden md:flex space-x-6">
          {[
            { id: "home", label: "Home" },
            { id: "services", label: "Services" },
            { id: "why", label: "Why Choose Us" },
            { id: "support", label: "Support" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-green-600"
                  : "text-white hover:text-green-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* === AUTH BUTTONS === */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => navigate("/register")}
            className={`px-4 py-2 rounded-md font-medium border transition-all ${
              scrolled
                ? "text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                : "text-white border-white hover:bg-white hover:text-green-700"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className={`px-4 py-2 rounded-md font-medium border transition-all ${
              scrolled
                ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                : "bg-white text-green-700 border-white hover:bg-gray-100"
            }`}
          >
            Sign In
          </button>
        </div>

        {/* === MOBILE MENU BUTTON === */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setScrolled(!scrolled)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                scrolled
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
