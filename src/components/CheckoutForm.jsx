import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Form } from "react-bootstrap";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import Loader from "./Loader";
import { toastSuccess, toastError, toastInfo } from "./Toast";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pago, setPago] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const validarTelefono = (tel) => {
    const regex = /^\+?54?\s?\d{10,13}$/;
    return regex.test(tel);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim().includes(" ")) {
      toastInfo("Ingresá nombre y apellido completos");
      return;
    }
    if (!email.includes("@")) {
      toastInfo("Ingresá un correo válido");
      return;
    }
    if (email !== confirmEmail) {
      toastInfo("Los correos no coinciden");
      return;
    }
    if (!validarTelefono(telefono)) {
      toastInfo("Ingresá un teléfono válido (10 a 13 dígitos, opcional +54)");
      return;
    }
    if (!pago) {
      toastInfo("Seleccioná un método de pago");
      return;
    }

    setLoading(true);

    const order = {
      buyer: { nombre, email, telefono, pago },
      items: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    try {
      const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, order);

      for (const item of cart) {
        const itemRef = doc(db, "items", item.id);
        await updateDoc(itemRef, {
          stock: item.stock - item.quantity,
        });
      }

      clearCart();
      toastSuccess("¡Compra realizada con éxito! Stock actualizado.");
      setOrderConfirmed(true);
    } catch (err) {
      console.error(err);
      toastError("Error al procesar la compra. Intentalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (orderConfirmed) {
    return (
      <div className="checkout-form p-4 rounded shadow mt-4 text-center">
        <h2 className="mb-4">¡Gracias por tu compra!</h2>
        <p>
          {" "}
          Tu pedido fue registrado correctamente. Revisá tu correo electrónico
          para concretar el pago y coordinar el envío.
        </p>
        <Link to="/catalogo">
          <Button variant="primary" className="mt-3 px-4">
            Seguir comprando
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-form p-4 rounded shadow mt-4">
      <h2 className="mb-4 text-center">Finalizar compra</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirmar Email</Form.Label>
          <Form.Control
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Forma de pago</Form.Label>
          <Form.Select
            value={pago}
            onChange={(e) => setPago(e.target.value)}
            required
          >
            <option value="">Seleccioná...</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta de crédito</option>
            <option value="mercado_pago">Mercado Pago</option>
          </Form.Select>
        </Form.Group>

        <div className="text-center mt-4">
          <Button variant="success" type="submit" className="px-5">
            Confirmar compra
          </Button>
        </div>
      </Form>
    </div>
  );
}
