import "./Party.css"
import "./Form.css"

import { useEffect, useState } from "react"

import { useParams, Link, useNavigate } from "react-router-dom"

import partyFetch from "../axios/config"

import useToast from "../hooks/useToast"

const Party = () => {

    const [party, setParty] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getParty = async() => {

           const res = await partyFetch.get(`/parties/${id}`)
            
           setParty(res.data)   
        }

        getParty()

    }, [])

    const handleDelete = async() => {
        const res = await partyFetch.delete(`/parties/${id}`)

        if(res.status === 200) {
            navigate("/")
            useToast(res.data.msg)
        }

    }

    if(!party) return <p>Carregando...</p>
    
  return (
    <div className="party">
        <h1>{party.title}</h1>
        <div className="actions-container">
            <Link to={`/party/edit/${id}`} className="btn">Editar</Link>
            <button onClick={handleDelete} className="btn-secondary">Excluir</button>
        </div>
        <p>Orçamento: R${party.budget}</p>
        <h3>Serviços contratados: </h3>
        <div className="services-container">
            {party.services.map((s) => (
                <div className="service" key={s._id}>
                    <img src={s.image} alt={s.name} />
                    <p>{s.name}</p>
                </div>
            ))}
        </div>
            
    </div>
  )
}

export default Party