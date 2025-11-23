import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ producto }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>Precio: ${producto.precio}</Card.Text>
        <ItemCount stock={10} initial={1} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
