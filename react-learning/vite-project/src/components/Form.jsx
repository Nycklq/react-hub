import { useState } from "react";

function Form() {
    const cadastrarUsuario = (e) => {
        e.preventDefault();
        console.log("Cadastrado com sucesso!");
        console.log(`Usuario ${nome} foi cadastrado com a senha ${senha}`)
    }

    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Nome" value={nome} onChange={(e) => {
                        setNome(e.target.value);
                    }} />
                </div>
                <div>
                    <input type="password" placeholder="Senha" value={senha} onChange={(e) => {
                        setSenha(e.target.value)
                    }} />
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;