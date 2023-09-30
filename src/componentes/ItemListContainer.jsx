import { useEffect, useState } from "react";
import data from "../data.json";
import Cards from "./ItemList";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [mostrarLoader, setMostrarLoader] = useState(true)
  const categoria = useParams().categoria


  const callProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 550);   //esto simula una tardanza de la api de 2 segundos para poder mostrar el loader

    });
  };

  useEffect(() => {




    callProducts().then((res) => {


      console.log(res[0].categoria.nombre)

      categoria ? setProductos(res.filter((prod) => prod.categoria.id === categoria)) : setProductos(res)




      setMostrarLoader(false);
    });







  }, [categoria]);



  return (
    mostrarLoader ? <Loader> cargando ... </Loader> :

      <div>
        {productos.length > 0 && <Cards productos={productos}></Cards>}
      </div>
  );
}





export default ItemListContainer;



