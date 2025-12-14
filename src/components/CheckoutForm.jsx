import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { Form, Button } from "react-bootstrap";

export default function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();
      })
      .catch((error) => {
        console.error("Error al generar la orden:", error);
      });
  };

  return (
    <div className="checkout-form mt-4">
      <h4>Finalizar compra</h4>
      {orderId ? (
        <p>
          ¡Gracias por tu compra! Tu número de orden es:{" "}
          <strong>{orderId}</strong>
        </p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={buyer.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={buyer.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              value={buyer.telefono}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Confirmar compra
          </Button>
        </Form>
      )}
    </div>
  );
}
