import React from "react";
import Cartwidget from "./Cartwidget";
import percha from "../img/percha.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link to="/"><img className="logo" src={percha} alt="logo"></img></Link>
          <h1>La Percha</h1>
          <Cartwidget />

        </div>
      </nav>
    </div>
  );
}
export default Navbar
