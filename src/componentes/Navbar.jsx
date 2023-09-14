import React from "react";
import Cartwidget from "./Cartwidget";
import percha from "../img/percha.jpg";
function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <img className="logo" src={percha} alt="logo"></img>
          <h1>La Percha</h1>

          <ul className="itemsNav">
            <li>remeras</li>
            <li>camperas</li>
            <li>pantalones</li>
            <li>zapatillas</li>
          </ul>
          <Cartwidget />
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
