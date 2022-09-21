import { useState } from "react"


const ConditionalRender = () => {
    const [x] = useState(false);

    const [name,setName] = useState("Ivan");

  return (
    <div>

        <h1> Isso será exibido </h1>
        {x && <p>Se X for true isso vai ser exibido</p>}
        {!x && <p>Agora x é falso</p>}

        <h1> If ternário</h1>
        {name === "João" ? (
          <div>
            <p>Nome é Joao</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado!</p>
          </div>
        )}

        <button onClick={() => setName("João")}>Clica aqui</button>
    </div>
    
  )
}

export default ConditionalRender