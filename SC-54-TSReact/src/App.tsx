import { useState } from 'react'
import './App.css'

function App() {

  // 1 - variaveis
  const name: string = "Matheus"
  const age: number = 30
  const [isWorking, setIsWorking] = useState(true)

  // 2 - funcoes
  const useGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  return (
    <div>
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking ? <p>Está trabalhando</p> : <p>Não está trabalhando</p>}
      <button onClick={() => setIsWorking(!isWorking)}>Alterar</button>
      <h3>{useGreeting(name)}</h3>
    </div>
  )
}

export default App
