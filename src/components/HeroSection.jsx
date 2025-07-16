import React, { useEffect, useState, useRef } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const textRef = useRef("JAGGERY POWDER");  // ✅ store string here
  const iRef = useRef(0);

  const bgImages = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
    "/hero4.png",
  ];

  // Background image changer
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect — final version
  useEffect(() => {
    const interval = setInterval(() => {
      const fullText = textRef.current;
      const index = iRef.current;

      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        iRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${bgImages[bgIndex]})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-logo">
        <img
          src="/Whitesubmark1.png"
          alt="Hero Logo"
          className="hero-logo-img"
        />
      </div>

      <div className="hero-title">
        <h1>
          <span className="typing">{typedText}</span>
        </h1>
      </div>

      <div className="hero-bottom-text">
        <p>JAGGERY IS A</p>
        <p>
          <strong>
            WHOLESOME GOODNESS –
            <br />
            BURSTING WITH MINERALS & VITAMINS
          </strong>
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
