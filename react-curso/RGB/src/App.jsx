import { useState } from "react"
import ColorBox from "./components/ColorBox/colorbox";

function App() {
  const [red,setRed] = useState(0);
  const [green,setGreen] = useState(0);
  const [blue,setBlue] = useState(0);

  const backgroundColor = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

  return (
    <>
      <ColorBox backgroundColor={backgroundColor(red,blue,green)}/>
      
      <h3>Red: {red}</h3>
      <input type="range" min={0} max={255} value={red} onChange={({target}) => setRed(parseInt(target.value))}/>

      <h3>Green: {green}</h3>
      <input type="range" min={0} max={255} value={green} onChange={({target}) => setGreen(parseInt(target.value))}/>

      <h3>Blue: {blue}</h3>
      <input type="range" min={0} max={255} value={blue} onChange={({target}) => setBlue(parseInt(target.value))}/>

      <br />

  
    </>
  )
}

export default App; 