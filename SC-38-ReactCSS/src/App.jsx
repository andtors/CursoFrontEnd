import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {

  const x = true
  const redTitle = true
  return (
    <>
      <div>
        {/* css global */}
        <h1 className='title'>CSS no react</h1>

        {/* css componente */}
        <MyComponent />
        <p>Pegou CSS do componente</p>

        {/* inline style */}
        <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Este elemento tem estilos inline</p>
        
        {/* inline style dinamico */}
        <h2 style={x ? {color: "purple"} : {color: "magenta"}}>
          CSS dinamico
        </h2>
        <h2 style={x === false ? {color: "purple"} : {color: "magenta"}}>
          CSS dinamico 2
        </h2>

        {/* classe dinamica */}
        <h2 className={redTitle ? "red-title" : "title"}>Este titulo tem uma classe dinamica</h2>

        {/* css modules */}
        <Title />
      </div>
    </>
  )
}

export default App
