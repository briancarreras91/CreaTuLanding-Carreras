import "bootstrap/dist/css/bootstrap.min.css"; // ✅ estilos solo aquí
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const productos = [
  {
    id: "1",
    nombre: "Whisky Jack Daniels",
    precio: 15000,
    descripcion: "Whisky americano 750ml",
  },
  {
    id: "2",
    nombre: "Fernet Branca",
    precio: 8000,
    descripcion: "Fernet italiano 750ml",
  },
  {
    id: "3",
    nombre: "Cerveza Heineken",
    precio: 1200,
    descripcion: "Cerveza lager 473ml",
  },
  {
    id: "4",
    nombre: "Vino Malbec",
    precio: 5000,
    descripcion: "Vino tinto argentino 750ml",
  },
];

const getProductoById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      producto ? resolve(producto) : reject("Producto no encontrado");
    }, 1000);
  });
};

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoById(id)
      .then((res) => setProducto(res))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="container mt-4">
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
