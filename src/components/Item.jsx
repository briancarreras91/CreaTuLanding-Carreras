import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
  return (
    <Col md={3} className="mb-4">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombre}
          className="product-img-catalogo"
        />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.variante}</Card.Text>
          <Card.Text>
            <strong>${producto.precio}</strong>
          </Card.Text>
          <Button as={Link} to={`/producto/${producto.id}`} variant="primary">
            Ver detalle
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
