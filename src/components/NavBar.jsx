import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/imagenes/Logo.png";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="esk-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Esk-Bio" className="esk-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="esk-navbar-nav" />
        <Navbar.Collapse id="esk-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/category/nuevos">
              Nuevos productos
            </Nav.Link>
            <NavDropdown title="Categorías" id="esk-categorias-dropdown">
              <NavDropdown.Item as={Link} to="/category/vinos">
                Vinos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/cervezas">
                Cervezas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/destilados">
                Destilados
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/sin-alcohol">
                Sin alcohol
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
