import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import "../styles/estilos.css";

export default function CartWidget() {
  const { getTotalItems } = useContext(CartContext);

  return (
    <NavLink to="/cart" className="cart-widget">
      <img src="/cart.png" alt="Carrito" width="30" />
      <span className="cart-text">{getTotalItems()}</span>
    </NavLink>
  );
}
