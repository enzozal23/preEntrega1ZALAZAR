import React from 'react';
import { Link } from 'react-router-dom';
import "../../src/App.css";
function Cards({ producto }) {


  return (

    <div>
      <div>
        <div className=" index-cards" style={{ width: "15rem" }}>
          <Link to={`/item/${producto.id}`}><img
            className="card-img-top"
            src={producto.imagen}
            alt="Cardcap"
          ></img>
          </Link>
          <div className="card-body">
            <h5 className="card-title">{producto.titulo}</h5>
            <p className="card-price">${producto.precio}</p>
            <strong><small>4 cuotas sin interes de ${producto.precio / 4}</small></strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards



