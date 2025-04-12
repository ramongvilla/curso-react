import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = ({filterProducts}) => {
  const [category, setCategory] = useState("todas");


  filterProducts()

  const handleCategory = (category) => {
      setCategory(category);
      filterProducts(category)
    //   console.log(props);
  };

  

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-2">
        <Container>
          <Navbar.Brand href="#home">Carrito con REACT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
                <NavDropdown.Item onClick={() => handleCategory("Calzado")}>
                  Calzado
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleCategory("Mochilas")}>
                  Mochilias
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleCategory("Ropa")}>
                  Ropa
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <span>Categoria Seleccionada: {category}</span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
