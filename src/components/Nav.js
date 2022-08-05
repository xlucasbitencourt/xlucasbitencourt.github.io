import React from "react";
import { Link } from "react-router-dom";

/*
const NavbarItem = ({ page }) => (
  <Link
    className="navbar-item is-capitalized navegacao"
    to={page === "home" ? "/" : `/${page}`}
  >
    {page}
  </Link>
);
*/

/*
const NavbarBurger = (props) => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger navegacao ${props.active ? "is-active" : ""}`}
  >
    <span />
    <span />
    <span />
  </button>
);
*/

class Nav extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  render() {
    const pages = ["home", "habilidades", "projetos", "contato"]; // itens do menu de navegação
    // const navbarItems = pages.map((page) => <NavbarItem page={page} key={page} />);

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
          {/*<NavbarBurger active={this.state.activeMenu} toggleMenu={this.toggleMenu} />*/}
          <button
            onClick={this.toggleMenu}
            className={`button navbar-burger navegacao ${
              this.state.activeMenu ? "is-active" : ""
            }`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={`navbar-menu navegacao ${this.state.activeMenu ? "is-active" : ""}`}
        >
          <div className="navbar-start centraliza navegacao">{navbarItems}</div>
        </div>
      </nav>
    );
  }
}

export default Nav;
