import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

export default function Cart() {
  const { cart, removeItem, clearCart, getTotalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h3>Tu carrito está vacío</h3>
        <NavLink to="/catalogo">
          <Button variant="primary">Volver al catálogo</Button>
        </NavLink>
      </div>
    );
  }

  return (
    <div>
      <h3>Carrito de compras</h3>
      {cart.map((prod) => (
        <div key={prod.id} className="mb-2">
          <p>
            {prod.nombre} x {prod.quantity} = ${prod.quantity * prod.precio}
          </p>
          <Button
            variant="danger"
            size="sm"
            onClick={() => removeItem(prod.id)}
          >
            Eliminar
          </Button>
        </div>
      ))}
      <h4>Total: ${getTotalPrice()}</h4>
      <Button variant="warning" onClick={clearCart}>
        Vaciar carrito
      </Button>

      <div className="mt-4">
        <CheckoutForm />
      </div>
    </div>
  );
}
