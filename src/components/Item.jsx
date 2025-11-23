import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>Precio: ${producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
