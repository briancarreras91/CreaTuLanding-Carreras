export default function ProductoCard({ producto, onAdd }) {
  return (
    <div className="producto-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.variante}</p>
      <p className="descripcion">{producto.descripcion}</p>
      <span className="precio">${producto.precio}</span>
      <button onClick={() => onAdd(producto.id)}>Agregar al carrito</button>
    </div>
  );
}
