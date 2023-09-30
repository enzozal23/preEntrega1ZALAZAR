import React from "react";
import Cartwidget from "./Cartwidget";
import percha from "../img/percha.jpg";
function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a href="/"><img className="logo" src={percha} alt="logo"></img></a>
          <h1>La Percha</h1>
          <Cartwidget />
        </div>
      </nav>
    </div>
  );
}
export default Navbar
