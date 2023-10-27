import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_DATOS } from "../firebase/data";
import Cards from "./ItemList";
import Loader from "./Loader";


function ItemListContainer() {
  const [titulo, setTitulo] = useState("PRODUCTOS")
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria

  useEffect(() => {

    const productsRef = collection(BASE_DATOS, "productos")

    getDocs(productsRef).then((res) => {


      const todosLosProductos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })


      const productoPorCategoria = todosLosProductos.filter((prod) => prod.categoria === categoria)


      if (categoria) {
        setProductos(productoPorCategoria)
        setTitulo(categoria)
      }
      else {
        setProductos(todosLosProductos)
        setTitulo("PRODUCTOS")
      }

    })

  }, [categoria]);





  return <div>

    {(productos.length !== 0) ? <div>
      {productos.length > 0 && <Cards productos={productos} titulo={titulo}></Cards>}
    </div> : <Loader> cargando ... </Loader>}
  </div>
}
export default ItemListContainer;



