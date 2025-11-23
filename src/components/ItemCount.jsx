import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  // Asegura que el valor inicial esté dentro de límites válidos
  const safeInitial = Math.min(Math.max(initial, 1), Math.max(stock, 0));
  const [count, setCount] = useState(safeInitial);

  // Si cambia el stock, ajusta el contador para no exceder
  useEffect(() => {
    setCount((prev) => {
      const max = Math.max(stock, 0);
      if (prev < 1) return 1;
      if (prev > max) return max || 1;
      return prev;
    });
  }, [stock]);

  const incrementar = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (stock === 0) return;
    if (typeof onAdd === "function") {
      onAdd(count);
    } else {
      // Comportamiento por defecto si no se pasa onAdd
      alert(`Agregaste ${count} unidad${count > 1 ? "es" : ""} al carrito`);
    }
  };

  const isOutOfStock = stock === 0;
  const canIncrement = count < stock;
  const canDecrement = count > 1;

  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex align-items-center gap-2">
        <ButtonGroup aria-label="Contador de unidades">
          <Button
            variant="outline-secondary"
            onClick={decrementar}
            disabled={!canDecrement || isOutOfStock}
          >
            −
          </Button>

          <Button variant="light" disabled>
            {count}
          </Button>

          <Button
            variant="outline-secondary"
            onClick={incrementar}
            disabled={!canIncrement || isOutOfStock}
          >
            +
          </Button>
        </ButtonGroup>

        <Button
          variant={isOutOfStock ? "secondary" : "primary"}
          onClick={handleAdd}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? "Sin stock" : "Agregar al carrito"}
        </Button>
      </div>

      <small className="text-muted">
        {isOutOfStock
          ? "No hay unidades disponibles"
          : `Stock disponible: ${stock}`}
      </small>
    </div>
  );
};

export default ItemCount;
