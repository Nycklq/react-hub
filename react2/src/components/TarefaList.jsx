import { RadioButtonChecked, Star, Delete } from "@mui/icons-material"
function TarefaList() {

    const tarefas = ["Fazer tarefa", "Estudar programacao", "Estudar"];
    
    return (
        <ul className="bg-[#0D142f] p-7 rounded-2xl w-[80%] max-h-[80%]">
            {
                tarefas.map(tarefa => {
                    return (
                        <li className="flex p-5 m-5 items-center justify-between cursor-pointer hover:bg-gray-500">
                            <section className="flex items-center gap-2">
                                <RadioButtonChecked />
                                <span>{tarefa}</span>
                            </section>

                            <section className="flex gap-2">
                                <div> <Star/> </div>
                                <div> <Delete/> </div>
                            </section>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TarefaList;