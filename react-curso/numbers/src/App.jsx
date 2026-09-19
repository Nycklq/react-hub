import './index.css'
import { useState } from 'react'

function App() {

  const [number,setNumber] = useState(0);

  return(
    <div>
      <h1>{number}</h1>
      <h2 className={number >= 0 ? "green" : "red"}>{number >= 0 ? "Positivo" : "negativo"}</h2>
      <input type="number" onChange={(e) => setNumber(e.target.value)}/>
      
    </div>
  )
}

export default App
