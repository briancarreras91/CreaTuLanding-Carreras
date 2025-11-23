import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((prod) => (
        <div className="col-md-3 mb-4" key={prod.id}>
          <Item producto={prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
