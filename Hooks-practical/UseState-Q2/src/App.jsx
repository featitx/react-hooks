import React, { useState } from 'react'

const App = () => {

  const [change , setChange] = useState('');

  let handleOnChange = (e) =>{
     setChange(e.target.value)
     console.log(change)
  }

  return (
<>
<input
        type="text"
        value= {change}
        onChange={handleOnChange}
      />
      <p>Current Value: {change}</p>
      <button onClick={()=>setChange('')}>
        Reset Input
      </button>
</>
    )
}

export default App


