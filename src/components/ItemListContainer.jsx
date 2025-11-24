import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos.json";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(
            productos.filter(
              (p) => p.tipo.toLowerCase() === categoryId.toLowerCase()
            )
          );
        } else {
          resolve(productos);
        }
      }, 500);
    });

    getProductos.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h2 className="mb-4">
        {categoryId ? `Categoría: ${categoryId}` : "Catálogo completo"}
      </h2>
      <ItemList productos={items} />
    </div>
  );
}
