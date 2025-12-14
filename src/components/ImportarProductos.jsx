import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import productos from "../data/productos.json"; // tu JSON local

export default function ImportarProductos() {
  const [status, setStatus] = useState("");

  const importarProductos = async () => {
    try {
      setStatus("Importando productos...");
      const itemsCollection = collection(db, "items");

      for (const producto of productos) {
        await addDoc(itemsCollection, producto);
      }

      setStatus("¡Productos importados correctamente!");
    } catch (error) {
      console.error("Error al importar productos:", error);
      setStatus("Hubo un error al importar los productos.");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={importarProductos}>Importar productos a Firebase</button>
      {status && <p>{status}</p>}
    </div>
  );
}
