import "./projetos.css";

function Projetos(props) {
    const { projetos } = props;
    return(
        <div className="secao-projetos">
            <h2>Projetos</h2>
            <ul className="lista-de-projetos">
                {
                    projetos.map(projeto => {
                        return(
                            <li>
                                <a href={projeto.link}></a>
                                <img src={projeto.caminhoDaImagem} alt="" />
                            </li>
                        )
                    })
                }
            </ul> 
        </div>
    )
}

export default Projetos;