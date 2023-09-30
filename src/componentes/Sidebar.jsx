import React from 'react'
import "../../src/App.css"
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <section className='sidebar-Container'>
                <div className='sidebar'>
                    <ul className="itemsNav">
                        <li><Link to="/productos">todos</Link></li>
                        <li>
                            <Link to="/productos/remeras" >remeras</Link>
                        </li>
                        <li>
                            <Link to="/productos/camperas" >camperas</Link>
                        </li>
                        <li>
                            <Link to="/productos/jeans">jeans</Link>
                        </li>

                    </ul></div>

            </section>
        </div>
    )
}

export default Sidebar
