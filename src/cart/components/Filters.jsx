import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const Filters = ({onChange, category}) => {
  const handleCategory = (category) => {

    console.log('categoria', category);

    onChange(prevState => ({...prevState, category}))
    
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-2">
        <Container>
          <Navbar.Brand >Filtros</Navbar.Brand>
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
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleCategory("all")}>
                  Mostar Todos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* <span>Categoria Seleccionada: {category}</span> */}
            <span>Categoria Seleccionada: {category} </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
