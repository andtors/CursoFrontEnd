import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import blogFetch from "../axios/config"

import "./Post.css"

const Post = () => {

    const {id} = useParams()

    const [post, setPost] = useState({})
   
    const getPost = async() => {
        try {
            const response = await blogFetch.get(`/posts/${id}`)
            
            setPost(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

  return (
    <div className="post-container">
        {!post ? <p>Carregando...</p> : 
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>}
       
    </div>
  )
}

export default Post