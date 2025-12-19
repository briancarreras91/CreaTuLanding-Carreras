import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { toastSuccess, toastWarn } from "./Toast";

export default function ItemDetail({ producto }) {
  const { addItem } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleAdd = () => {
    if (producto.stock && cantidad > producto.stock) {
      toastWarn("No hay stock suficiente");
      return;
    }
    addItem(producto, cantidad);
    toastSuccess("Producto agregado al carrito");
  };

  return (
    <div className="item-detail">
      <h2>{producto.nombre}</h2>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ maxWidth: "300px", marginBottom: "1rem" }}
      />

      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock disponible: {producto.stock}</p>

      <div className="d-flex align-items-center gap-2 mt-3">
        <input
          type="number"
          min={1}
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="form-control"
          style={{ width: 100 }}
        />
        <Button variant="primary" onClick={handleAdd}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}
