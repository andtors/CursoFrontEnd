import { createContext, useState } from 'react'

// 4 - importação de components
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'

// 5 - destructuring
import Destructuring, {Category} from './components/Destructuring'

// 6 - state
import State from './components/State'

// 8 - type
type textOrNull = string | null

import './App.css'

// 9 - context
import Context from './components/Context'

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // 1 - variaveis
  const name: string = "Matheus"
  const age: number = 30
  const [isWorking, setIsWorking] = useState(true)

  // 2 - funcoes
  const useGreeting = (name: string): string => {
    return `Olá, ${name}`
  }
  const myText: textOrNull = "Tem algum texto aqui!"
  let mySecondText: textOrNull = null

  type fixed = "Isso" | "Aquilo" | "Ou"

  const testandoFixed: fixed = "Isso"

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking ? <p>Está trabalhando</p> : <p>Não está trabalhando</p>}
        <button onClick={() => setIsWorking(!isWorking)}>Alterar</button>
        <h3>{useGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name={"Segundo" }/>
        <Destructuring title='Primeiro post' content='Algum conteudo' commentsQty={10} tags={["ts", "js"]} category={Category.TS}/>
        <Destructuring title='Outro post' content='Outro conteudo' commentsQty={5} tags={["python"]} category={Category.P}/>
        <State/>

        {myText && 
          <p>Tem texto na variavel</p>
        }

        {mySecondText &&
          <p>Tambem tem texto na variavel</p>
        }
      </div>
      <Context />
    </AppContext.Provider>
  )
}

export default App
