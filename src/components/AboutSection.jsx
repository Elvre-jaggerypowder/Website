import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutSection.css";

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image" data-aos="fade-right">
          <img src="/image2.png" alt="About Elvre" />
        </div>
        <div className="about-text" data-aos="fade-left">
          <h2>About Jaggary</h2>
          <p>
            Jaggery is a traditional, natural sweetener crafted from concentrated sugarcane or palm juice,cherished for its rich flavor and remarkable health benefits. It is packed with essential minerals such as iron, calcium, magnesium, and potassium, along with vital vitamins including A, C, D2, E, and B-complex. Jaggery helps improve digestion, purify the blood, detoxify the liver, and boost immunity. Its antioxidant and antiallergic properties support respiratory health, especially in polluted environments. Providing steady, long-lasting energy, jaggery is suitable for all age groups. A staple of both <strong>wellness</strong> and <strong>traditional</strong>, it’s an ideal choice for those seeking a naturally nourishing lifestyle. Jaggery is an unrefined sugar product made in Asia and Africa. It’s sometimes referred to as a <strong>non-centrifugal sugar</strong>, because it’s not spun during processing to remove the nutritious molasses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
