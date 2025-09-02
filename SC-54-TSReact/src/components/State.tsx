import { useState, type ChangeEvent } from "react"

const State = () => {
    const [text, setText] = useState<string | null>("testando hook")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
  return (
    <div>
        <p>O text é: {text}</p>
        <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default State