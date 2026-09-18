import "./index.css";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const decrementar = () => {
    if(count > 0) setCount(count - 1);
  }

  const crementar = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Contador: {count}</h1>
      <div style={{ display: "flex", gap: 12 }}>

        <button onClick={crementar}>+</button>

        <button onClick={decrementar}>-</button>

      </div>
    </>
  )

}

export default App
