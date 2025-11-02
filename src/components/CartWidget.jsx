import { FaShoppingCart } from "react-icons/fa";
import "../styles/CartWidget.css";

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">3</span>
    </div>
  );
}

export default CartWidget;
