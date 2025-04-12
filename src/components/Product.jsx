export const Product = ({ product }) => (
    <div className="col-md-4 mb-4">
      <div className="me-card-product">
        <img src={product.image} className="image-product" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          {/* <p className="card-text">{product.description}</p> */}
          <h6>${product.price}</h6>
        </div>
      </div>
    </div>
  );