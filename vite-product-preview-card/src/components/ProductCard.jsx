import "../scss/product.css";

const ProductCard = () => {
  return (
    <main>
      <div className="container">
        <div className="img"></div>
        <div className="card-info">
          <div className="card-header montserrat-500">PERFUME</div>
          <div className="card-title text-preset-1 fraunces-700">
            <h1>Gabrielle Essence Eau De Parfum</h1>
          </div>
          <div className="card-text text-preset-2 montserrat-500">
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className="card-price">
            <div className="first-price fraunces-700">$149.99</div>
            <div className="second-price montserrat-500">$169.99</div>
          </div>
          <div className="card-footer">
            <div className="btn-img"></div>
            <div className="btn-text montserrat-700">
              <p>Add to Cart</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductCard;
