function TarefaForm() {
    return(
        <form className="flex gap-2">
            <input type="text" placeholder="Adicionar Tarefa" className="outline-none pl-2 bg-[#172042] text-white rounded" />
            <button className="bg-[#0D142f] p-2.5 rounded-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out">Adicionar Tarefa</button>
        </form>
    )
}

export default TarefaForm;