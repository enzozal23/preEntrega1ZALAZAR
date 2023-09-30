import React from "react";
import Cards from "./Cards";
import Sidebar from "./Sidebar";


function ItemList({ productos }) {
  const productosRecibido = productos;

  return (
    <>
      <h1 className="titulo">Productos</h1>
      <div className="contain-Master">

        <Sidebar />
        <div className="card-Container">






          {
            productosRecibido.map((producto) => {

              return (

                <Cards producto={producto} />

              );
            })



          }
        </div>
      </div>
    </>
  )



}

export default ItemList
