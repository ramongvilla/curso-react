// components/CartSidebar.js
import { Offcanvas, Button, ListGroup, Image } from "react-bootstrap";

export const CartSidebar = ({ show, onClose, cartItems = [] }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex gap-2">
                  <Image src={item.image} alt={item.title} width={60} height={60} />
                  <div>
                    <div className="fw-bold">{item.title}</div>
                    <div>Cantidad: {item.quantity}</div>
                    <div>Precio: ${item.price}</div>
                    <div>Total: ${item.price * item.quantity}</div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            <div className="mt-3">
              <h5>Total a pagar: ${total.toFixed(2)}</h5>
              <Button variant="dark" className="w-100 mt-2">
                Finalizar Compra
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
