import { useState } from "react"


const HookUseState = () => {

    // 1 - useState
    let userName = "João"
    const [name, setName] = useState("Matheus")

    const changeNames = () => {
        userName = "João da Silva"
        setName("Matheus Battisti")
    }

    // 2 - useState e input
    const [age, setAge] = useState(10)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(age)
    }

   
    

  return (
    <div>
        {/* 1 - useState */}
        <hr />
        <h2>useState</h2>
        <p>var: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
        {/* 2 - useState e input*/}
        <hr />
        <h2>useState e input</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" />
        </form>
        <p>Você tem {age} anos</p>
    </div>
  )
}

export default HookUseState