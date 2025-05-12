import { useState } from "react"

const Lista = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"])

    const [users, setUsers] = useState([

      {id:1, name: "Matheus", age: 31},
      {id:2, name: "Maria", age: 20},
      {id:3, name: "João", age: 19}
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4)

      setUsers((prevUsers) => 
        prevUsers.filter((user) => randomNumber !== user.id)
    )
    }

  return (
    <div>
        <ul>
          {/* renderização de listas em react */}
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>

        {/* Render com key */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
          ))}
        </ul>

        {/* previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default Lista