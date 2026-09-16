function CardProduto(props) {

    const { nome, preco } = props;
    
    return(
        <div>
            <h2>{nome}</h2>
            <p>R$ {preco}</p>
            <button onClick={props.onAdicionar}>Adicionar ao carrinho</button>
        </div>
    )
}

export default CardProduto;