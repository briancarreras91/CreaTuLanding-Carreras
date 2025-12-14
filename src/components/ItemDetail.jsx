import { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

export default function ItemDetail({ producto }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const onAdd = (cantidad) => {
    addItem(producto, cantidad);
    setAdded(true);
  };

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

        {!added ? (
          <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
        ) : (
          <NavLink to="/cart">
            <Button variant="primary">Ir al carrito</Button>
          </NavLink>
        )}
      </Card.Body>
    </Card>
  );
}
