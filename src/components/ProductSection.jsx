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
        <h2 className="product-heading">Our Medicinally Pure Jaggery Powder</h2>
      </div>
    </section>
  );
}

export default ProductSection;
