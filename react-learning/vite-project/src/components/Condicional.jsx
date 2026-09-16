import { useState } from "react";

function Condicional() {

    const [email,setEmail] = useState();
    const [userEmail,setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();

        setUserEmail(email);
    }

    return (
        <div>
            <h2>Cadastre o seu email</h2>
            <form>
                <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={userEmail}/>
                <button type="submit" onClick={enviarEmail}>Enviar</button>
                {
                    userEmail && (
                        <div>
                            <p>O E-mail do usuário é: {userEmail}</p>
                            <button onClick={() => userEmail("")}>Limpar email</button>
                        </div>
                    )
                }
            </form>
        </div>
    )

}

export default Condicional;