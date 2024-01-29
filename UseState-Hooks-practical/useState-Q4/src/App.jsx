import React from 'react'
import { useState } from 'react'

const App = () => {

const [detail , setDetail] = useState(true)
  return (
   <>
   <div className='details'>

  {(detail == true) ?
    <ul>
      <li>First detail</li>
      <li>Second detail</li>
      <li>Third detail</li>
    </ul>
     :
  <>
  
  </>
  }
   </div>
    <div className='buttons'>
      { (detail == false) ?
      
      <button onClick={()=> setDetail(true)}>
         Show Detail
      </button>
         :
      <button onClick={()=> setDetail(false)}>
        Hide detail 
      </button>}
     
    </div>

    
   </>
  )
}

export default App
