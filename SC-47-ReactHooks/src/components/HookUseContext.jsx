import { createContext } from "react"

export const SomeContext = createContext()



const HookUseContext = ({children}) => {

    const contextValue = "testing context"
  return (
    <div>
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    </div>
  )
}

export default HookUseContext