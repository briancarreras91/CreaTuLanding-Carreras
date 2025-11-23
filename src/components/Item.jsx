import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = ({ producto }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
        <Button as={Link} to={`/item/${producto.id}`} variant="primary">
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
