import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../styles/estilos.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src="/Logo.png"
            alt="Logo esk-bio"
            className="navbar-logo me-2"
          />
          Esk-bio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/catalogo">
              Catálogo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Cerveza">
              Cervezas
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Vino">
              Vinos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Gin">
              Gin
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Whisky">
              Whisky
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/Bebidas%20sin%20alcohol">
              Bebidas sin Alcohol
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
