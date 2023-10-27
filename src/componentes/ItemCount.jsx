import { useContext, useEffect, useState } from "react"
import "../../src/App.css"
import { Cartcontext } from "../contexts/Cart"


function ItemCount({ item }) {
    const { carrito, setCarrito, setPrecioTotal} = useContext(Cartcontext)

    const [stock, setStock] = useState(true)
    const [cantidad, setCantidad] = useState(1)



    useEffect(() => {
        if (carrito[0]?.cantidad >= item.stock) { //control de stock
            setStock(!stock)
        } else { setStock(stock) }
    }, [carrito])

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleAgregar = (item, cantidad) => {


        const productAdd = { ...item, cantidad };
        const nuevoCarrito = [...carrito]

        const existeProducto = nuevoCarrito.find((producto) => producto.id === productAdd.id)

        if (existeProducto) {
            existeProducto.cantidad += cantidad;
        } else {
            nuevoCarrito.push(productAdd)
        }
        setCarrito(nuevoCarrito)
    };


    const precioTotalCalculado = () => {
        return (carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0
        ))
    }

    useEffect(() => {
        setPrecioTotal(precioTotalCalculado)
    }, [carrito])




    return (
        <div className="container-count">
            <div >
                <button className="btn btn-outline-primary button-count" onClick={handleSumar}>+</button>
                <p>{cantidad}</p>
                <button className="btn btn-outline-primary button-count" onClick={handleRestar}>-</button>
            </div>
            {stock ? <button className="btn btn-primary button-agregar" onClick={() => { handleAgregar(item, cantidad) }}>agregar al carrito</button> : <div className="no-stock"><small>"No hay mas stock de este producto"</small></div>}


        </div>
    )
}


export default ItemCount

