import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src={producto.imagen}
        alt={producto.nombre}
        className="product-img-detalle"
      />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>
          <strong>${producto.precio}</strong>
        </Card.Text>
        <ItemCount stock={producto.stock} initial={1} />
      </Card.Body>
    </Card>
  );
}
