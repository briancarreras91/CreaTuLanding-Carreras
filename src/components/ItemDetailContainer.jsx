import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const getProducto = async () => {
      try {
        const docRef = doc(db, "items", id);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al traer producto:", error);
      }
    };

    getProducto();
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
