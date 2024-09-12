import "../scss/product.css";

const ProductCard = () => {
  return (
    <>
      <div className="container">
        <div className="img"></div>
        <div className="card-info">
          <div className="card-header">Perfume</div>
          <div className="card-title">
            <h1>Gabrielle Essence Eau De Parfum</h1>
          </div>
          <div className="card-text">
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className="card-price">
            <div className="first-price">$149.99</div>
            <div className="second-price">$169.99</div>
          </div>
          <div className="card-footer">
            <div className="btn-img"></div>
            <div className="btn-text">
              <p>Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
