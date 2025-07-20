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
         ELVRE jaggery is crafted using age-old traditional methods. It begins with freshly harvested sugarcane, which is crushed to extract juice, then slowly boiled in large iron pans over a wood fire. The thickened syrup is cooled and shaped before being sun-dried and ground into golden powder. Every step is done by hand  by farmers who turn simplicity into purity, with no chemicals or preservatives.
        </p>
      </div>
    </section>
  );
}

export default HowMadeSection;
