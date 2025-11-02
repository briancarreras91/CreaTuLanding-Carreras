import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="esk-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="src/assets/imagenes/Logo.png"
            alt="Esk-Bio"
            className="esk-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="esk-navbar-nav" />
        <Navbar.Collapse id="esk-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#nuevos">Nuevos productos</Nav.Link>
            <NavDropdown title="Categorías" id="esk-categorias-dropdown">
              <NavDropdown.Item href="#vinos">Vinos</NavDropdown.Item>
              <NavDropdown.Item href="#cervezas">Cervezas</NavDropdown.Item>
              <NavDropdown.Item href="#destilados">Destilados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#sin-alcohol">
                Sin alcohol
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#carrito" className="esk-cart">
              <FaShoppingCart size={20} /> Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
