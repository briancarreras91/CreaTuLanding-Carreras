import React, { useState } from "react";
import "./styles/NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src="src/assets/imagenes/Logo.png" alt="Esk-Bio" />
        </a>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#">Categorías</a>
        </li>
        <li>
          <a href="#">Últimos ingresos</a>
        </li>
        <li>
          <a href="#">Ofertas</a>
        </li>
        <li>
          <a href="#">Mi perfil</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
