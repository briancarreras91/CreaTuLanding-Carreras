import "bootstrap/dist/css/bootstrap.min.css"; // ✅ estilos solo aquí
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const productos = [
  {
    id: "1",
    nombre: "Whisky Jack Daniels",
    categoria: "destilados",
    precio: 15000,
  },
  { id: "2", nombre: "Fernet Branca", categoria: "destilados", precio: 8000 },
  { id: "3", nombre: "Cerveza Heineken", categoria: "cervezas", precio: 1200 },
  { id: "4", nombre: "Vino Malbec", categoria: "vinos", precio: 5000 },
];

const getProductos = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(productos.filter((prod) => prod.categoria === categoryId));
      } else {
        resolve(productos);
      }
    }, 1000);
  });
};

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProductos(categoryId).then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2>Catálogo {categoryId ? `- ${categoryId}` : ""}</h2>
      <ItemList productos={items} />
    </div>
  );
};

export default ItemListContainer;
