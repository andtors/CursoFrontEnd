import axios from "../axios-config"

import { useState } from "react"

import {toast} from "react-toastify"

import { useNavigate } from "react-router-dom"

import "./AddMemory.css"

const AddMemory = () => {

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("image", image)
        formData.append("title", inputs.title)
        formData.append("description", inputs.description)

        try {
            const response = await axios.post("memories", formData, {
                headers: {
                    "Content-Type":"multipart/form-data"
                }
            })

            toast.success(response.data.msg)
            navigate("/")
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.msg)
        }
    }

    const handleChange = (e) => {
        if(e.target.name === "image") {
            setImage(e.target.files[0])
        } else {
            setInputs({...inputs, [e.target.name]: e.target.value})
        }
    }

  return (
    <div className="add-memory-page">
        <h2>Crie uma nova memoria!</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Título:</p>
                <input type="text" placeholder="Defina um título" name="title" onChange={handleChange}/>
            </label>
            <label>
                <p>Descrição:</p>
                <textarea name="description" placeholder="Explique o que aconteceu... " onChange={handleChange}></textarea>
            </label>
            <label>
                <p>Foto:</p>
                <input type="file"  name="image" onChange={handleChange}/>
            </label>
            <input type="submit" className="btn" value={"Enviar"} />
        </form>
    </div>
  )
}

export default AddMemory