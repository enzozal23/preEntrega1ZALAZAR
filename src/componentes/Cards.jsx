import React from 'react'
import { Link } from 'react-router-dom'


function Cards({ producto }) {



  return (

    <div>
      <div>

        <div className="card" style={{ width: "15rem" }}>
          <img
            className="card-img-top"
            src={producto.imagen}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{producto.titulo}</h5>
            <p className="card-price">{producto.precio}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-primary">
              Ver Producto
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards



