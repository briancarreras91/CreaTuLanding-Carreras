import "bootstrap/dist/css/bootstrap.min.css"; // ✅ estilos solo aquí
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <div className="esk-cart">
      <FaShoppingCart size={20} />
      <span className="cart-count">0</span>
    </div>
  );
}

export default CartWidget;
