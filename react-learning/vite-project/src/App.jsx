import Condicional from "./components/Condicional"
import Lista from "./components/Lista";

function App() {

  const meusitens = ["React", "Vue", "Angular"];
  
  return (
    <div>
      <h1>Renderizacao da condicional</h1>
      <Condicional />
      <h1>Renderizacao de Listas</h1>
      <Lista lista={meusitens}/>
      <Lista lista={[]}/>
    </div>
  )

}

export default App
