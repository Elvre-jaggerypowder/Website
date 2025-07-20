import './ProductSection.css';

function ProductSection() {
  return (
    <section
      id="product"
      className="product-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/productpacking.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="product-content">
        <h2 className="product-heading">Our Organic Jaggery Powder</h2>
        <p className="product-description">
         Pure, unrefined, and slow-crafted straight from sugarcane fields to your kitchen. Packed with nutrients, made with care, and free from chemicals or additives.
        </p>
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

export default ProductSection;
