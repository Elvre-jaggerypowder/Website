import React from "react";
import "./FooterSection.css";

function FooterSection() {
  return (
    <section id="contact">
      <footer className="footer-section" id="footer">
        <img src="ELVRElogo1.png" alt="Elvre Logo" className="footer-logo" />

        <div className="footer-icons" data-aos="zoom-in">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-whatsapp"></i>
        </div>

        <p className="copyright">
          <small>© 2025 Elvre. All rights reserved.</small>
        </p>
      </footer>
    </section>
  );
}

export default FooterSection;
