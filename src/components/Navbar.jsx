import React from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/assets/ELVRElogo1.png`} alt="Elvre Logo" />
      </div>
      <nav className="nav-links">
        <ScrollLink to="hero" smooth={true} duration={500} offset={-70}>Home</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} offset={-70}>About Us</ScrollLink>
        <ScrollLink to="product" smooth={true} duration={500} offset={-70}>Our Products</ScrollLink>
        <ScrollLink to="testimonial" smooth={true} duration={500} offset={-70}>Testimonial</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>Contact Us</ScrollLink>
      </nav>
    </header>
  );
};

export default Navbar;
