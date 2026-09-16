function Lista(props) {

    const { lista } = props;

    return (
        <div>
            <h3>Lista de coisas boas </h3>
            {
                lista.length > 0 ? (lista.map((item, index) => {
                    return <p key={index}>{item}</p>
                })) : (
                    <p>Nao ha itens na lista</p>
                )
            }
        </div>
    )
}

export default Lista;