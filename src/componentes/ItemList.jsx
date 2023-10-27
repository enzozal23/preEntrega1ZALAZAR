import React from "react";
import Cards from "./Cards";
import Sidebar from "./Sidebar";


function ItemList({ productos, titulo }) {
  const productosRecibido = productos

  return (
    <>
      <h1 className="titulo">{titulo}</h1>
      <div className="contain-Master">

        <Sidebar />
        <div className="card-Container">
          {
            productosRecibido.map((producto) => {
              return (
                <Cards key={producto.id} producto={producto} />
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default ItemList
