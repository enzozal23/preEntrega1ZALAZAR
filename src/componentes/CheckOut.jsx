import React, { useContext, useState } from 'react'
import { Cartcontext } from '../contexts/Cart';
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore";
import { BASE_DATOS } from '../firebase/data';

function CheckOut() {
    const [pedidoId, setPedidoId] = useState("")
    const { carrito, precioTotal, vaciarCarrito } = useContext(Cartcontext)
    const { register, handleSubmit } = useForm()

    const enviar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal
        }

        const pedidosGuardados = collection(BASE_DATOS, "pedidos")
        addDoc(pedidosGuardados, pedido).then((doc) => {
            setPedidoId(doc.id)
            vaciarCarrito()
        })

    }
    return (
        pedidoId ? <div className='end-shop-container'>
            <h1>muchas gracias por tu compra en la percha !</h1>
            <p>tu numero de orden es : {pedidoId}</p></div> :
            <>
                <h1 className='title-checkOut'>Finalizar compra</h1>
                <div className='container-form'>

                    <form className='formulario' onSubmit={handleSubmit(enviar)}>

                        <input type="text" placeholder='ingresa tu nombre' {...register("nombre")} />
                        <input type="text" placeholder='ingresa tu apellido' {...register("apellido")} />
                        <input type="email" placeholder='ingresa tu e-mail' {...register("email")} />
                        <input type="phone" placeholder='ingresa tu teléfono'{...register("telefono")} />

                        <button className='enviar' type='submit'>enviar</button>



                    </form>
                </div>
            </>
    )
}

export default CheckOut
