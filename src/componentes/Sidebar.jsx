import React from 'react'
import "../../src/App.css"
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <section className='sidebar-Container'>
                <div className='sidebar'>
                    <ul className="itemsNav">
                        <li><Link to="/productos"><button>todos</button></Link></li>
                        <li>
                            <Link to="/productos/remeras" ><button>remeras</button></Link>
                        </li>
                        <li>
                            <Link to="/productos/camperas" ><button>camperas</button></Link>
                        </li>
                        <li>
                            <Link to="/productos/jeans"><button>jeans</button></Link>
                        </li>

                    </ul></div>

            </section>
        </div>
    )
}

export default Sidebar
