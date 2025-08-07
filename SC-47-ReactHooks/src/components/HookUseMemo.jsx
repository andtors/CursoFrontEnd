import { useMemo, useState, useEffect } from "react"

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)

    const premiumNumbers = useMemo(() => {
        return ["100", "0", "200"]
    }, [])

    useEffect(() => {
        console.log("Premium numbers foi alterado!")
    }, [])
  return (
    <div>
        {/* 1 - useMemo*/}
        <hr />
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {premiumNumbers.includes(number) ? <p>Acertou o número!</p> : "" }
    </div>
  )
}

export default HookUseMemo