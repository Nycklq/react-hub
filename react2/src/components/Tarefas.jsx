import TarefaForm from "./TarefaForm";
import TarefaList from "./TarefaList";

function Tarefas() {
    return (
        <div className="flex flex-col items-center bg-gray-600 text-white py-5 px-0">
            <TarefaForm />
            <TarefaList />
        </div>
    )
}

export default Tarefas;