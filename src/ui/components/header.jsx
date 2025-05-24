import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Filters } from "../../cart/components/Filters";
import { NavLink, useNavigate } from "react-router";

export const Header = ({ changeFilters, category }) => {
  const navigate = useNavigate();

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
          <button className="btn btn-secondary text-white " onClick={onLogout}>
            Logout
          </button>
        </Container>
      </Navbar>

      <Filters onChange={changeFilters} category={category} />
    </>
  );
};
