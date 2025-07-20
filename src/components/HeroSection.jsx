import './HeroSection.css';

function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/jaggery.png'})` }}
    >
      <div className="hero-text">
        <h1>Pure Organic <span>Jaggery Powder</span></h1>
        <p>Handcrafted By Farmers</p>
      </div>
      <button
       onClick={() => {
       document.getElementById('made')?.scrollIntoView({ behavior: 'smooth' });
       }}
       className="discover-button">

        Discover More
        </button>

    </section>
  );
}

export default HeroSection;
