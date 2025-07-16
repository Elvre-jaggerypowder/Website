import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProductSection.css";

function ProductSection() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <section id="product" className="product-section">
      <div className="product-content" >
        <div className="product-text" data-aos="fade-right">
          <h2>Our Product</h2>
          <p>
            At ELVRE, we are deeply committed to bringing you the authentic taste of jaggery powder, crafted from fresh sugarcane juice. Our journey is driven by a passion to preserve tradition while embracing innovation. Backed by a technology-driven team of professionals, we aim to modernize the jaggery-making process, reducing its labor-intensive nature through strategic collaborations with leading Indian institutes.
            <br /><br />
            We proudly offer high-quality, chemical-free jaggery powder— with no added colors or preservatives— ensuring purity, taste, and nutrition in every grain. Our sustainable, eco-friendly production practices, combined with a strong distribution network across India, allow us to deliver premium quality at competitive and affordable prices.
          </p>
        </div>

        <div className="product-image" data-aos="fade-left">
          <img src="image3.png" alt="Jaggery Product" />
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
