import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id} = useParams()

    const url = "http://localhost:3000/products/" + id

    const {data: product} = useFetch(url)

    if(!product) return <p>Carregando!</p>
  return (
    <div>
        <p>ID do produto: {id}</p>
        <h2>{product.name}</h2>
        <p>R$ {product.price}</p>
    </div>
  )
}

export default Product