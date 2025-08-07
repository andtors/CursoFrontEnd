import { useLayoutEffect, useState, useEffect } from "react"

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("Algum nome")

    useEffect(() => {
        console.log(2)
        setName("Mudou de novo")
    }, [])

    useEffect(() => {
        console.log(3)
        setName("Mudou de novo 3")
    }, [])

    useLayoutEffect(() => {
        console.log(1)
        setName("Outro nome")
    }, [])

  return (
    <div>
        {/* 1 - useLayoutEffect*/}
        <hr />
        <h2>useLayoutEffect</h2>
        <p>Nome: {name}</p>
    </div>
  )
}

export default HookUseLayoutEffect