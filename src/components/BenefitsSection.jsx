import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BenefitsSection.css";

function BenefitsSection() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  const benefits = [
    "Rich in Minerals & Antioxidants",
    "Detoxifies Liver & Body",
    "Boosts Immunity",
    "Purifies Blood",
    "Promotes Respiratory Health",
    "Anti-Toxic & Anti-Carcinogenic",
    "Reduces Stress & Fatigue",
    "Eases PMS Discomfort",
  ];

  return (
    <section id="benefits" className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-image" data-aos="fade-right">
          <img src="hero1.png" alt="Benefits of Jaggery" />
        </div>

        <div className="benefits-list" data-aos="fade-left">
          <h2>Benefits of Natural Jaggery</h2>
          <ul>
            {benefits.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
