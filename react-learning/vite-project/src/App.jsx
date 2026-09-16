import CardProduto from "./components/CardProduto";

function App() {
  
  const produto = {
    nome: "Mouse",
    preco: 120
  }

  const produtoClicado = () => {
    alert("Produto clicado");
    console.log(produto);
  }

  return (
    <div>
      <CardProduto nome={produto.nome} preco={produto.preco} onAdicionar={produtoClicado}/>
    </div>
  )
}

export default App
