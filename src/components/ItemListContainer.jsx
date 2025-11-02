import React from "react";
import "../styles/ItemListContainer.css";

function ItemListContainer({ props }) {
  return (
    <section className="item-list-container">
      <h2>{props}</h2>
    </section>
  );
}
export default ItemListContainer;
