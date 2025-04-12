import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Filters } from "./Filters";

export const Header = ({ changeFilters, category }) => {
  return (
    <>
      <Navbar
        sticky="top"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>Carrito con React</Navbar.Brand>
        </Container>
      </Navbar>

      <Filters onChange={changeFilters} category={category} />
    </>
  );
};
