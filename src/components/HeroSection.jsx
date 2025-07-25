import './HeroSection.css';

function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/jaggery.png'})` }}
    >
      <div className="hero-text">
        <h1>Medicinally Pure <span>Jaggery Powder</span></h1>
        <p>Handcrafted By Farmers</p>
      </div>
      <a
       href="https://docs.google.com/forms/d/e/1FAIpQLSciH1m2eFeV4wN3Q-XoGAmLpZONoKcidottQM3s9UCXSigsjw/viewform?usp=dialog"
       target="_blank"
       rel="noopener noreferrer">
       <button className="buy-now-btn">🛒Buy Now</button>
      </a>
    </section>
  );
}

export default HeroSection;
