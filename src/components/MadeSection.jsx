import './MadeSection.css';

function HowMadeSection() {
  return (
    <section id="made"
      className="howmade-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/imageeee3.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="howmade-content">
        <h2 className="howmade-heading">How ELVRE is Made</h2>
        <p className="howmade-description">
        ElVRE Jaggery is made using traditional methods with modern techniques. Fresh sugarcane is crushed to get the juice, which is slowly boiled into jaggery syrup. The syrup is then dried and ground into golden powder. Every step is done by farmers, using no chemicals or preservatives—just pure, simple goodness."
        </p>
      </div>
    </section>
  );
}

export default HowMadeSection;
