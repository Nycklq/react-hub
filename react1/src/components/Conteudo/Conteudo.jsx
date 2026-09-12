import "../../App.css";
import { useState } from "react";

function Conteudo() {
    const [numero, setNumero] = useState(0);
    const [nome, setNome] = useState("Nome inicial");

    const clicouNoBotao = () => {
        setNome("Cleitin");
        setNumero(numero + 1);
    }

    return (
        <main>
            <h1>Meu nome é Nicollas</h1>
            <h3>Sou engenheiro de software</h3>
            <p>{numero}</p>
            <button className="btn" onClick={clicouNoBotao}>Clique aqui</button>
            <h1>{nome}</h1>
      </main>
    )
}

export default Conteudo