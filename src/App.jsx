import React, { useState } from 'react'

const App = () => {

   let [count , setCount] = useState(0);

   function Increment() {
    setCount((prev)=>prev + 1);
   }

   function decrement() {
    setCount((prev)=>prev + 1);
   }


  return (
    
    <>

<p>Count: {count} </p>
<button onClick={Increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
    
    </>
  )
}

export default App
