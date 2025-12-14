import { Button } from "react-bootstrap";

export default function CartItem({ producto, onRemove }) {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <div>
        <strong>{producto.nombre}</strong> x {producto.quantity}
      </div>
      <div>
        ${producto.precio * producto.quantity}
        <Button
          variant="outline-danger"
          size="sm"
          className="ms-3"
          onClick={onRemove}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
}
