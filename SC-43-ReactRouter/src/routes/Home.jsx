import React from 'react'

import { useFetch } from '../hooks/useFetch'

const url = "http://localhost:3000/products"

const Home = () => {
  const {data: items} = useFetch(url)

  return (
    <div>
      <h2>Home</h2>
      <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$ {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default Home