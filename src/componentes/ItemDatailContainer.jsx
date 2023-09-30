import React, { useState } from 'react'
import { useEffect } from 'react'
import PedirPorId from './PedirPorId'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDatailContainer() {

  const [item, setItem] = useState(null)
  const id = useParams().id

  useEffect(() => {
    PedirPorId(Number(id))
      .then((res) => {
        setItem(res)
    
      })
  }, [id]) //seteamos cada vez que cambia const id




  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDatailContainer;
