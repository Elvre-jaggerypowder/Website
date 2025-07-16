import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="ELVRElogo1.png" alt="ELVRE Logo" />
      </div>

      <button className="menu-toggle" onClick={() => {
        const nav = document.getElementById("mainNav");
        nav.classList.toggle("active");
      }}>
        ☰
      </button>

      <nav id="mainNav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#product">Product</a>
        <a href="#benefits">Benefits</a>
        <a href="#uses">Uses</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
