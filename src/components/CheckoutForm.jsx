import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Form } from "react-bootstrap";
import { collection, addDoc, getFirestore } from "firebase/firestore";

export default function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pago, setPago] = useState("");
  const [error, setError] = useState("");

  const validarTelefono = (tel) => {
    const regex = /^\+?54?\s?9?\d{10,11}$/;
    return regex.test(tel);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!nombre.trim().includes(" ")) {
      setError("Ingresá nombre y apellido completos");
      return;
    }
    if (!email.includes("@")) {
      setError("Ingresá un correo válido");
      return;
    }
    if (email !== confirmEmail) {
      setError("Los correos no coinciden");
      return;
    }
    if (!validarTelefono(telefono)) {
      setError(
        "ingresá un teléfono válido (de 10 a 13 dígitos solo números, opcional +54) "
      );
      return;
    }
    if (!pago) {
      setError("Seleccioná un método de pago");
      return;
    }

    setError("");

    const order = {
      buyer: { nombre, email, telefono, pago },
      items: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    try {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, order);
      clearCart();
      alert("¡Compra realizada con éxito!");
    } catch (err) {
      console.error(err);
      setError("Error al guardar la orden");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      {error && <p style={{ color: "red" }}>{error}</p>}

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

      <Button variant="success" type="submit">
        Confirmar compra
      </Button>
    </Form>
  );
}
