import React from 'react'

// 3 - alterando valor do contexto
// import { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter'

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 - Contexto mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
 // const {counter} = useContext(CounterContext)

 const {counter} = useCounterContext()
 const {color, dispatch} = useTitleColorContext()

 const setTitleColor = (color) => {
    dispatch({type:color})
 }
 
  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>valor do counter: {counter}</p>
      <ChangeCounter />

      {/* 6 - alterando o contexto */}

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("GREEN")}>Verde</button>
      </div>
    </div>
    
  )
}

export default Home