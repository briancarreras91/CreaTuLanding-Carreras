# Esk-bio E‑Commerce

Proyecto de e‑commerce para la venta y entrega de bebidas alcohólicas, desarrollado con **React**, **Firebase** y **React Bootstrap**.  
Incluye carrito de compras, checkout con validaciones y actualización de stock en tiempo real.

---

## Tecnologías utilizadas

- **React 18** + Vite
- **React Router DOM** para navegación
- **React Bootstrap** para UI
- **Firebase Firestore** para persistencia de datos
- **React Toastify** para notificaciones
- **Context API** para manejo global del carrito

---

## Estructura principal

- `src/components` → componentes reutilizables (NavBar, Cart, CheckoutForm, ItemListContainer, etc.)
- `src/context/CartContext.jsx` → lógica del carrito
- `src/service/firebase.jsx` → configuración de Firebase
- `src/styles/estilos.css` → estilos institucionales

---

## Funcionalidades

- **Catálogo**: listado de productos con imágenes y categorías.
- **Detalle de producto**: información completa y stock disponible.
- **Carrito**:
  - Agregar, quitar y vaciar productos.
  - Cálculo automático del total.
  - Notificaciones con Toastify.
- **Checkout**:
  - Formulario con validaciones (nombre, email, teléfono, método de pago).
  - Guardado de orden en Firestore.
  - Actualización de stock en tiempo real.
  - Mensaje de agradecimiento al finalizar:
  - Botón **Seguir comprando** que redirige al catálogo.

---

## Demo en línea

Podés ver el proyecto funcionando en el siguiente enlace:

[esk-bio.vercel.app](https://esk-bio.vercel.app)

## Autor

Brian Carreras.
