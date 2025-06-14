// components/CartSidebar.js
import { Offcanvas, Button, ListGroup, Image, Alert } from "react-bootstrap";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router";

export const CartSidebar = ({ show, onClose, cartItems = [] }) => {
  const { removeFromCart, clearCart } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Guardar compra en localStorage
    const existing = JSON.parse(localStorage.getItem("purchases") || "[]");
    const newPurchase = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cartItems,
      total: total.toFixed(2),
    };
    localStorage.setItem("purchases", JSON.stringify([...existing, newPurchase]));

    // Limpiar y mostrar alerta
    clearCart();
    setShowAlert(true);

    // Redirigir al historial después de un momento
    setTimeout(() => {
      setShowAlert(false);
      navigate("/historial");
    }, 1500);
  };

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {showAlert && <Alert variant="success">¡Compra finalizada!</Alert>}
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex gap-2">
                  <Image src={item.image} alt={item.title} width={60} height={60} />
                  <div className="flex-grow-1">
                    <div className="fw-bold">{item.title}</div>
                    <div>Cantidad: {item.quantity}</div>
                    <div>Precio: ${item.price}</div>
                    <div>Total: ${item.price * item.quantity}</div>
                  </div>
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div className="mt-3">
              <h5>Total a pagar: ${total.toFixed(2)}</h5>
              <Button variant="dark" className="w-100 mt-2" onClick={handleCheckout}>
                Finalizar Compra
              </Button>
              <Button variant="outline-danger" className="w-100 mt-2" onClick={clearCart}>
                Vaciar Carrito
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
