import Conteudo from "./components/Conteudo";
import Header from "./components/Header";

function App() {
  localStorage.setItem("nome", "Nyk")
  return (
    <div>
      <Header />
      <Conteudo />
    </div>
  )
}

export default App
