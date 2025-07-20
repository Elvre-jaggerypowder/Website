import React, { useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import emailjs from "@emailjs/browser";
import "./Footer.css";

const Footer = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // ✅ Success/Error message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_suvhk3j",         // ✅ Your Service ID
      "template_2bpgw82",        // ✅ Your Template ID
      form.current,
      "zPChkrLTWlnnSFFtp"        // ✅ Your Public Key
    ).then(
      () => {
        setStatus("✅ Thank you! Your message has been sent.");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setStatus("❌ Something went wrong. Please try again.");
      }
    );
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column */}
        <div className="footer-left">
          <img
            src={`${process.env.PUBLIC_URL}/assets/ELVRElogo1.png`}
            alt="ELVRE Logo"
            className="footer-logo"
          />
          <div className="social-icons">
            <a href="https://wa.me/your-number" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
          <div className="footer-policies">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p className="copyright">
            ©Smart Agro. All Rights Reserved.
          </p>
        </div>

        {/* Center Column */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={500}>About Us</ScrollLink></li>
            <li><ScrollLink to="product" smooth={true} duration={500}>Our Products</ScrollLink></li>
            <li><ScrollLink to="testimonial" smooth={true} duration={500}>Testimonials</ScrollLink></li>
            <li><ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink></li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div className="footer-newsletter">
          <h3>Contact us via Email</h3>
          <p>Have a question or inquiry? Send us a message below.</p>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message..."
              required
              rows={3}
            ></textarea>
            <button type="submit">Send</button>
          </form>
          {/* ✅ Success/Error message */}
          {status && <p className="email-status">{status}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
