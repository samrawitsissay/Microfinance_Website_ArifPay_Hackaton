import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h2>Microfinance Platform</h2>
      <nav>
        <a href="/user">User</a>
        <a href="/admin">Admin</a>
        <a href="/">Logout</a>
      </nav>
    </header>
  );
};

export default Header;