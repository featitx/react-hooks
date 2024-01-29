import React, { useState } from 'react'

const App = () => {


  const [username , setUsername ] = useState('Abdul');
  const [email , setEmail] = useState('siddabdul7@gmail.com');
  
  return (
    <div>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value) }
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
          />
        </label>
      </form>
    </div>
  )
}

export default App
