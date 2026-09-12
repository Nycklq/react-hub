import  Header from "./components/Header/Header.jsx";
import Conteudo from "./components/Conteudo/Conteudo.jsx";
import Projeto from "./components/Projetos/Projetos.jsx";
import "./App.css"
import { useState } from "react";


export default function App() {
  const [projetos, setProjetos] = useState([
    {linkDoGithub: "https://github.com", caminhoDaImagem: "src/assets/facebook.png"},
    {linkDoGithub: "https://github.com", caminhoDaImagem: "src/assets/teska.png"},
    {linkDoGithub: "https://github.com", caminhoDaImagem: "src/assets/vite.png"}
  ])

  return (
    <div className="conteudo-principal">
      <Header/>
      <Conteudo/>
      <Projeto projetos={projetos}/>
      <footer>
        <p>feito por Nicollas</p>
      </footer>
    </div>
  )

} 