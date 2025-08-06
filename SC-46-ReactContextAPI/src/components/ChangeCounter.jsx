import React, { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'
import { useCounterContext } from '../hooks/useCounterContext'


const ChangeCounter = () => {

    const {counter, setCounter} = useCounterContext()
  return (
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
  )
}

export default ChangeCounter