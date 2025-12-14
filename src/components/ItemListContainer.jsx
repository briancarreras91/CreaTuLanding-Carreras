import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const itemsCollection = collection(db, "items");
        let q = itemsCollection;

        if (categoryId) {
          q = query(itemsCollection, where("tipo", "==", categoryId));
        }

        const snapshot = await getDocs(q);
        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(productos);
      } catch (error) {
        console.error("Error al traer productos:", error);
      }
    };

    getProductos();
  }, [categoryId]);

  return (
    <div>
      <ItemList productos={items} />
    </div>
  );
}
