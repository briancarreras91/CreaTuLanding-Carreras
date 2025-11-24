import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 1) setCount(count - 1);
  };

  const agregar = () => {
    alert(`Agregaste ${count} producto(s) al carrito`);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <Button variant="secondary" onClick={decrementar}>
        -
      </Button>
      <span>{count}</span>
      <Button variant="secondary" onClick={incrementar}>
        +
      </Button>
      <Button variant="success" onClick={agregar}>
        Agregar al carrito
      </Button>
    </div>
  );
}
