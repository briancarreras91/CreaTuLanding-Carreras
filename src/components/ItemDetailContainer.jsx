import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import Loader from "./Loader";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemRef = doc(db, "items", id);
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return item ? <ItemDetail producto={item} /> : <p>Item no encontrado</p>;
}
