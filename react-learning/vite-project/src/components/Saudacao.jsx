function Saudacao(props) {

    function gerarSaudacao(nome) {
        return `Olá ${nome}, seja bem vindo`
    }

    return (
        <>
            <p>{props.nome && gerarSaudacao(props.nome)}</p>
        </>
    )
}

export default Saudacao