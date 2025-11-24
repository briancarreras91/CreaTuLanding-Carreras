import Item from "./Item";
import { Row } from "react-bootstrap";

export default function ItemList({ productos }) {
  return (
    <Row>
      {productos.map((p) => (
        <Item key={p.id} producto={p} />
      ))}
    </Row>
  );
}
