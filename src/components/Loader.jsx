import React from "react";
import "../styles/estilos.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <img src="/gif.gif" alt="Cargando..." className="loader-gif" />
    </div>
  );
}
