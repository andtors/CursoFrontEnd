import { useState } from "react"

const MyForm = ({userName, userEmail}) => {

    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const [bio, setBio] = useState("")
    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
       
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, bio, role)

        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="text-start">Nome:</label>
            <input 
            type="text"
            name="name" 
            className="form-control" 
            placeholder="Digite o seu nome" 
            onChange={handleName}
            value={name}/>
        </div>
        <div className="mb-3">
            <label className="form-label">
                <span >E-mail:</span>
                <input 
                type="email" 
                className="form-control" 
                placeholder="Digite seu e-mail" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
            </label>
        </div>
        <div className="mb-3">
            <label>Bio:</label>
            <textarea 
            name="bio" 
            className="form-control" 
            placeholder="Descrição do úsuario" 
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            >

            </textarea>
        </div>
        <div className="mb-3">
            <label>Função no sistema</label>
            <select 
            name="role" 
            className="form-control" 
            onChange={(e) => setRole(e.target.value)}
            value={role}>
                <option>Selecione</option>
                <option value="user">Usuario</option>
                <option value="editr">Editor</option>
                <option value="admin">Administrador</option>
            </select>
        </div>
        <input type="submit" className="btn btn-primary"/>
    </form>
    
  )
}

export default MyForm