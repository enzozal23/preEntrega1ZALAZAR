import React from 'react'
import "../../src/App.css"
import ItemCount from './ItemCount'



function ItemDetail({ item }) {
    return (<div className='cards-detail-container'>
        <div className="card mb-3 cards-detail " style={{ width: "1040px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.titulo}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text cards-detail-precio"> Precio: ${item.precio}</p>
                        <p> Quedan: {item.stock} unidades.</p>
                        <ItemCount item={item} />
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default ItemDetail
