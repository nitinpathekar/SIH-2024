// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Assured Contract Farming Platform</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contracts">Contracts</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
