import './index.css'
import { useState } from 'react'

function App( {title, description} ) {

  const [number,setNumber] = useState(0);

  return(
    <div>
      <h1>{title}  {number}</h1>

      <p>{description}</p>

      <h2 className={number >= 0 ? "green" : "red"}>{number >= 0 ? "Positivo" : "negativo"}</h2>
      <input type="number" onChange={({target}) => setNumber(target.value)}/>
      

      <ul>
        {[1,2,3,4,5,6,7,8,9,10].map(num => number > 0 && <li>{number} x {num} = {number * num}</li> )}
      </ul>
    </div>
  )
}

export default App
