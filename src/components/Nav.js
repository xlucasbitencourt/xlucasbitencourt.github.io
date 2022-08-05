import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  const pages = ["home", "habilidades", "projetos", "contato"]; // itens do menu de navegação

  const navbarItems = pages.map((page) => (
    <Link
      key={page}
      className="navbar-item is-capitalized navegacao"
      to={page === "home" ? "/" : `/${page}`}
    >
      {page}
    </Link>
  ));

  return (
    <nav className={`navbar navegacao`}>
      <div className="navbar-brand navegacao">
        <button
          onClick={toggleMenu}
          className={`button navbar-burger navegacao ${activeMenu ? "is-active" : ""}`}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`navbar-menu navegacao ${activeMenu ? "is-active" : ""}`}>
        <div className="navbar-start centraliza navegacao">{navbarItems}</div>
      </div>
    </nav>
  );
}

export default Nav;
