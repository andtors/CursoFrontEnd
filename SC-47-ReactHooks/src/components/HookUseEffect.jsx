import { useEffect, useState } from "react"


const HookUseEffect = () => {

    
    // 1 - useEffect sem dependencia

    useEffect(() => {
        console.log("Estou sendo executada!")
    })

    const [number, setNumber] = useState(1)
    
    const changeSomething = () => {
        setNumber(number + 1)
    }
    
    // 2 - array de deps. vazio
    useEffect(() => {
        console.log("Serei executado epanas uma vez!")
    }, [])

    // 3 - array deps. com valores

    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => { 
        if(anotherNumber > 0) {
            console.log("Sou executado apenas quando muda o anotherNumber")
        }
    }, [anotherNumber])

    // 4 - cleanup do useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Hello World!")
            setAnotherNumber(anotherNumber + 1)
        }, 2000)
        return () => clearTimeout(timer)
    }, [anotherNumber])

  return (
    <div>
        {/* 1 - useEffect*/}
        <hr />
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        {/* 3 - array deps. com valores*/}
        <p>anotherNumber: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 2)}>Executar</button>
    </div>
  )
}

export default HookUseEffect