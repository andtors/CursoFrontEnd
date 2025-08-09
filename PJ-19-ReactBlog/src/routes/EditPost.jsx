import { useState, useEffect, use } from "react"

import {useNavigate, useParams} from "react-router-dom"

import blogFetch from "../axios/config"

const EditPost = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    
    const {id} = useParams()

    const getPost = async() => {
        try {
            const response = await blogFetch.get(`/posts/${id}`)

            const data = response.data
            
            setTitle(data.title)
            setBody(data.body)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    const editPost = async(e) => {
        e.preventDefault()

        const post = {title, body, userId: 1}

        blogFetch.post(`/posts/${id}`, {
            body: post
        })

        navigate(`/posts/${id}`)
    }

  return (
     <div className="new-post">
        <h2>Editando: {title}</h2>
        <form onSubmit={(e) => editPost(e)}>
            <div className="form-control">
                <label htmlFor="title">Titulo</label>
                <input type="text" name="title" placeholder="Digite o titulo" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
             <div className="form-control">
                <label htmlFor="body">Conteudo</label>
                <textarea name="body" id="body" placeholder="Digite o conteudo" onChange={(e) => setBody(e.target.value)} value={body} rows={4}></textarea>
            </div>
            <input type="submit" value="Editar Post" className="btn"/>
        </form>
    </div>
  )
}

export default EditPost