import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_DATOS } from "../firebase/data"
import ItemDetail from './ItemDetail'

function ItemDatailContainer() {

  const [item, setItem] = useState(null)
  const id = useParams().id
 
  useEffect(() => {
    const docRef = doc(BASE_DATOS, "productos", id)
    getDoc(docRef)
      .then((resp) => { setItem({ ...resp.data(), id: resp.id }) })
  }, [id]) //seteamos cada vez que cambia const id

  return (
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDatailContainer;
