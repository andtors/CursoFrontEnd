import { useState } from 'react'

const Data = () => {
    let someData = 10

    const [anotherNumber, setAnotherNumber] = useState(15)
    
    return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variavel</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => anotherNumber === 15 ? setAnotherNumber(20) : setAnotherNumber(15)}>Mudar state</button>
        </div>
    </div>
  )
}

export default Data