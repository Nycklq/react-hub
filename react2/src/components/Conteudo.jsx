import ConteudoPrincipal from "./ConteudoPrincipal.jsx";
import SideBar from "./Sidebar.jsx";

function Conteudo() {
    return(
        <div className="flex h-full">
            <SideBar />
            <ConteudoPrincipal />
        </div>
    )
}

export default Conteudo