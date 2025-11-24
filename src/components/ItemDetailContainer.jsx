import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos.json";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProducto = new Promise((resolve, reject) => {
      const prod = productos.find((p) => p.id === parseInt(id));
      setTimeout(() => {
        prod ? resolve(prod) : reject("Producto no encontrado");
      }, 500);
    });

    getProducto
      .then((res) => setProducto(res))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}
