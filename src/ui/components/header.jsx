import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Filters } from "../../cart/components/Filters";
import { NavLink, useNavigate } from "react-router";
import { useCartSidebar } from "../../cart/hooks/useCartSidebar";
import { Button } from "react-bootstrap";

export const Header = ({ changeFilters, category }) => {
  const navigate = useNavigate();
  const { openSidebar } = useCartSidebar();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <Navbar
        sticky="top"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <div className="d-flex align-items-center">
            <Navbar.Brand>Carrito con React</Navbar.Brand>
            <NavLink className="nav-item nav-link text-white" to="/">
              Home
            </NavLink>
          </div>
          <div className="d-flex gap-2">
            <Button onClick={openSidebar} variant="outline-light">
              <i className="bi bi-cart-fill"></i>
            </Button>
            <Button variant="outline-light">
              <i className="bi bi-person-circle"></i>
            </Button>
            <Button onClick={onLogout} variant="outline-light">
              <i className="bi bi-box-arrow-left"></i>
            </Button>
          </div>
        </Container>
      </Navbar>

      <Filters onChange={changeFilters} category={category} />
    </>
  );
};
