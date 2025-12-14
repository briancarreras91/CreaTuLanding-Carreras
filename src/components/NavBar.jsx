import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const cartCount = 3;
  const cartTotal = 12000;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/Logo.png" alt="Logo esk-bio" className="navbar-logo" />
          Esk-bio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Catalogo">
              Catálogo
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Cerveza">
              Cervezas
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Vino">
              Vinos
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Gin">
              Gin
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Whisky">
              Whisky
            </Nav.Link>
            <Nav.Link as={Link} to="/category/Bebidas%20sin%20alcohol">
              Bebidas sin Alcohol
            </Nav.Link>
          </Nav>
          <CartWidget count={cartCount} total={cartTotal} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
