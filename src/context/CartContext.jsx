import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addItem = (item, quantity) => {
    const existingItem = cart.find((prod) => prod.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity, precio: Number(item.precio) }]);
    }
  };

  // Eliminar producto
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Cantidad total de unidades
  const getTotalItems = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  // Precio total
  const getTotalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
