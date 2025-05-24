import { useNavigate, useParams } from "react-router";
import { useProduct } from "../hooks/useProduct";
import { Card, ListGroup } from "react-bootstrap";

export const DetailProduct = () => {
  const { id } = useParams();

  console.log(id);

  const { product } = useProduct(id);

  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  console.log(product);

  if (!product) {
    return (
      <>
        <span>Cargando...</span>
      </>
    );
  }

  return (
    <>
      <div className="container mt-5">
        <button className="btn btn-outline-dark mb-5" onClick={onBack}>
          Regresar
        </button>
        <div className="row">
          <div className="col-4">
            <img className="w-100" src={product.image} alt="" />
          </div>

          <div className="col-8">
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle className="mb-2 mt-2 text-muted">
              $ {product.price}
            </Card.Subtitle>
            <span className="badge bg-dark">{product.category}</span>
            <Card.Text>{product.description}</Card.Text>
            <button className="btn btn-dark">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};
