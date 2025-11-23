import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={() => alert(`Agregaste ${count} unidades al carrito`)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
