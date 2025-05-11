import { useState } from "react"

const Lista = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"])

  return (
    <div>
        <ul>
          {/* renderização de listas em react */}
            {list.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Lista