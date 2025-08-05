import './HeroSection.css';

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      {/* Sliding image animation section */}
      <div className="image-slider">
        <img
          src={`${process.env.PUBLIC_URL}/assets/jaggery.png`}
          className="slide-image jaggery-img"
          alt="Jaggery Background"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/productpacking.png`}
          className="slide-image product-img"
          alt="Product Packing"
        />
      </div>

      {/* Hero text content */}
      <div className="hero-text">
        <h1>
          Medicinally Pure <span>Jaggery Powder</span>
        </h1>
        <p>Handcrafted By Farmers</p>
      </div>

      {/* Book Now button */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSciH1m2eFeV4wN3Q-XoGAmLpZONoKcidottQM3s9UCXSigsjw/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="buy-now-btn">🛒Book Now</button>
      </a>
    </section>
  );
}

export default HeroSection;
