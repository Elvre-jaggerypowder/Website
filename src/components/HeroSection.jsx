import './HeroSection.css';
import { Link } from 'react-router-dom';   // ✅ Add this import

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
      <Link to="/buynow">
        <button className="buy-now-btn">🛒Book Now</button>
      </Link>
    </section>
  );
}

export default HeroSection;
