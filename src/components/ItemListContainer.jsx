import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import Loader from "./Loader";
import ItemList from "./ItemList";
import { toastError, toastInfo } from "./Toast";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsCollection = collection(db, "items");
    const q = categoryId
      ? query(itemsCollection, where("tipo", "==", categoryId))
      : itemsCollection;

    getDocs(q)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);

        if (categoryId && data.length === 0) {
          toastInfo(`No hay productos en la categoría "${categoryId}"`);
        }
      })
      .catch((err) => {
        console.error(err);
        toastError("Error al cargar productos. Probá refrescar la página.");
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return <Loader />;
  }

  return <ItemList productos={items} />;
}
