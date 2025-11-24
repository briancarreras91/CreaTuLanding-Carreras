import { Link } from "react-router-dom";

export default function CartWidget({ count, total }) {
  return (
    <Link to="/cart" className="cart-widget">
      <i className="bi bi-cart-fill"></i>
      <span className="cart-text">
        {count} items - ${total}
      </span>
    </Link>
  );
}
