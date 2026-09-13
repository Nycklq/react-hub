import ConteudoPrincipal from "./ConteudoPrincipal.jsx";
import SideBar from "./Sidebar.jsx";


function Conteudo() {
    return(
        <div className="flex">
            <SideBar />
            <ConteudoPrincipal />
        </div>
    )
}

export default Conteudo