import { useState } from "react"

const ConditionalRender = () => {
  
    const [x] = useState(true);

    const [name, setName] = useState("Wendel");

    return (
    <div>
        <h1>Será exibido?</h1>
        {x && <p>Sim, será exibido</p>}
        {/*Imprime se for false */}
        {!x && <p>Não, será exibido</p>} 
        <h1>IF ternário</h1>
        {name === "Wendel" ? (
            <div>O nome é {name}</div>
        ) : (
            <div>Nome não encontrado.</div>
        )}
        <div>
            <button onClick={() => setName("Venes")}>Trocar nome</button>
        </div>
    </div>
  )
}; 

export default ConditionalRender;