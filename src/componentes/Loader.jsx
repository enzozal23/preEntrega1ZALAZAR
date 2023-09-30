import React from 'react'
import "../../src/App.css"
function Loader({children}) {


  return (
    <div className="loader-Container" >{children}

       <div className="loader">{
       
       }
        </div>
      
    </div>
  )
}

export default Loader
