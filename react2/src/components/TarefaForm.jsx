import { useState } from "react";

function TarefaForm() {

    const [nomeTarefa, setNomeTarefa] = useState("");

    function criaTarefa() {
        const tarefasAntigas = JSON.parse(localStorage.getItem("tarefas")) || [];

        const tarefasAntigasNovas = [...tarefasAntigas, nomeTarefa];

        const novasTarefas = JSON.stringify(tarefasAntigasNovas);

        localStorage.setItem("tarefas", novasTarefas)
    }

    return(
        <form onSubmit={criaTarefa} className="flex gap-2">
            <input type="text" onChange={(e) => {
                setNomeTarefa(e.target.value);
            }} placeholder="Adicionar Tarefa " className="outline-none pl-2 bg-[#172042] text-white rounded" />
            <button className="bg-[#0D142f] p-2.5 rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out">Adicionar Tarefa</button>
        </form>
    )
}

export default TarefaForm;