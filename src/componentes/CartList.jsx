import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../../src/App.css"
import { Cartcontext } from '../contexts/Cart'
function CartList() {

    const { carrito, precioTotal, vaciarCarrito } = useContext(Cartcontext)


    return (
        <>
            {
                (carrito.length === 0) ? <div className='cart-void'><h1>No hay productos en el carrito <i className="bi bi-emoji-frown-fill"></i> <hr /><Link to="/productos"><button className='button-back'> volver</button></Link></h1></div>
                    : <div className='cards-cart-container'>{carrito.map((producto) => {
                        return (<div key={producto.id} className="card mb-3 cards-cart" style={{ width: "250px" }}>
                            <div>
                                <div>
                                    <img src={producto.imagen} className="img-thumbnail" alt={producto.titulo}
                                        title={producto.titulo}></img>
                                </div>
                                <div className="">
                                    <div className="card-body">
                                        <h5 className="card-title">{producto.titulo}</h5>

                                        <p className="card-text">{producto.cantidad}</p>

                                        <p className="card-text"><small className="text-body-secondary"> precio unitario: ${producto.precio}</small></p>

                                        <p className="card-text"><strong className="text-body-secondary">precio total: ${producto.precio * producto.cantidad}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}</div>

            }
            {carrito.length > 0 && <div className='total-cart'><h2 className='container-price'>precio total: $ {precioTotal} <hr />4 cuotas sin interes de: $ {precioTotal / 4}</h2><button className='cart-buttons' onClick={vaciarCarrito}>vaciar carrito</button>
                <Link className='cart-buttons' to="/finalizarCompra">
                    Finalizar compra
                </Link>
            </div>}


        </>
    );
}

export default CartList
