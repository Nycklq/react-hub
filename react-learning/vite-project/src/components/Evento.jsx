import Button from "./evento/Button";

function Evento() {
    
    function meuEvento() {
        console.log("Fui ativado");
    }

    function segundoEvento() {
        console.log("Segundo evento foi ativado");
    }

    return(
        <div>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )

}

export default Evento;