import React from 'react'
import data from "../data.json"
function PedirPorId(id) {




  return new Promise((resolve, reject) => {

    const item = data.find((el) => el.id === id);
    console.log(item)
 
    setTimeout(() => {

      item ? resolve(item) : reject({
        error: "no se encontro el producto"
      })
    }, 550);
  })
}

export default PedirPorId;
