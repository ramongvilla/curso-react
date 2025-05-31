import { useNavigate, useParams } from "react-router";
import { useProduct } from "../hooks/useProduct";
import { Button, Card, Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useCartSidebar } from "../hooks/useCartSidebar";
import { useCart } from "../hooks/useCart";

export const DetailProduct = () => {
  const { id } = useParams();
  const { product } = useProduct(id);
  const { addToCart } = useCart();
  const { openSidebar } = useCartSidebar();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const onBack = () => {
    navigate(-1);
  };

  const increment = () => setQuantity((prev) => prev + 1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) {
      setQuantity(val);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    openSidebar(); // <-- Abre el sidebar inmediatamente
  };

  if (!product) {
    return (
      <div className="d-flex mt-5">
        <Spinner className="m-auto" animation="grow" />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <button className="btn btn-outline-dark mb-5" onClick={onBack}>
        <i className="bi bi-arrow-left"></i>
      </button>
      <div className="row">
        <div className="col-8 d-flex">
          <img
            className="w-50 m-auto"
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="col-4 p-0">
          <Card.Title className="fs-1 mb-2">{product.title}</Card.Title>

          <Card.Subtitle className="mb-3 fs-3">
            $ {product.price}
          </Card.Subtitle>

          <span className="fw-bold">Cantidad</span>
          <div className="mb-3 d-flex align-items-center gap-2">
            <Button variant="outline-dark" onClick={decrement}>
              -
            </Button>
            <Form.Control
              type="number"
              className="w-25 text-center"
              value={quantity}
              onChange={handleChange}
              min={1}
            />
            <Button variant="outline-dark" onClick={increment}>
              +
            </Button>
          </div>

          <Button
            className="mb-3 w-100"
            size="lg"
            variant="dark"
            onClick={handleAddToCart}
          >
            Agregar al Carrito ({quantity})
          </Button>

          <Card.Text>{product.description}</Card.Text>
        </div>
      </div>
    </div>
  );
};
