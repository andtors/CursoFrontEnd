import HookUseState from "../components/HookUseState"
import HookUseReducer from "../components/HookUseReducer"
import HookUseEffect from "../components/HookUseEffect"
import HookUseContext from "../components/HookUseContext"
import HookUseRef from "../components/HookUseRef"
import HookUseCallback from "../components/HookUseCallback"
import HookUseMemo from "../components/HookUseMemo"
import HookUseLayoutEffect from "../components/HookUseLayoutEffect"
import HookUseImperativeHandle from "../components/HookUseImperativeHandle"
import HookUseCustom from "../components/HookUseCustom"

import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"

const Home = () => {
  const {contextValue} = useContext(SomeContext)
  return ( 
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <HookUseContext />
      <hr />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookUseCustom />
    </div>
    
  )
}

export default Home