import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { toastSuccess, toastWarn, toastConfirm } from "./Toast";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clearCart, getTotalPrice } =
    useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
    toastWarn("Producto eliminado del carrito");
  };

  const handleClear = () => {
    toastConfirm({
      message: "¿Seguro que querés vaciar el carrito?",
      onConfirm: () => {
        clearCart();
        toastSuccess("Carrito vaciado");
      },
      onCancel: () => {},
    });
  };

  if (cart.length === 0) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <div>
      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border-bottom py-2"
        >
          <div>
            <strong>{item.nombre ?? item.title}</strong>
            <div>Cantidad: {item.quantity}</div>
            <div>Precio: ${item.precio}</div>
          </div>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => handleRemove(item.id)}
          >
            Quitar
          </Button>
        </div>
      ))}

      <div className="d-flex justify-content-between align-items-center mt-3">
        <strong>Total: ${getTotalPrice()}</strong>
        <div className="d-flex gap-2">
          <Button variant="secondary" onClick={handleClear}>
            Vaciar carrito
          </Button>
          <Link to="/checkout">
            <Button variant="success">Ir al checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
