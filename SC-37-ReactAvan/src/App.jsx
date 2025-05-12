// Folha de estilo do arquivo app.jsx
import './App.css'

// 2 - Imagem em assets
import night from "./assets/night.jpg"

// 3 - useState
import Data from './components/Data'

// 4 - Listas
import Lista from './components/Lista'

// 7 - Renderização condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - destructuring
import CarDetails from './components/CarDetails'

// 11  - renderização de listas
const cars = [
  {id: 1, brand: "Ferrari", color:"Amarelo", km:0},
  {id: 2, brand: "KIA", color:"Branco", km:200000},
  {id: 3, brand: "Renault", color:"Azul", km:32000}
]

// 12 - fragment
import Fragment from './components/Fragment'

// 13 - children
import Container from './components/Container'

// 14 - função como prop
import Execute from './components/Execute'
import { useState } from 'react'

// 15 - state lift
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'
function App() {

// 15 - state lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const showMessage = () =>{
    alert("Evento do componente pai")
  }

  return (
    <div>
      <h1>Avançando em React</h1>
      {/* useState */}
      <Data />

      {/* list */}
      <Lista />

      {/* renderização condicional */}
      <ConditionalRender />

      {/* props */}
      <ShowUserName name="André" />

      {/* destructuring */}
      <CarDetails brand="Mercedes" km={1000} color="Silver"/>

      {/* reaproveitando componentes */}
      <CarDetails brand="Fiat" km={9999} color="Branco"/>
      <CarDetails brand="Audi" km={0} color="Azult"/>

      {/* renderização de lista em loop */}
      {cars.map((car) => (
        <CarDetails key={car.id}  brand={car.brand} color={car.color} km={car.km} />
      ))}

      {/* fragment */}
      <Fragment />

      {/* children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>

      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>

      {/* função em prop */}
      <Execute myFunction={showMessage}/>

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
      {/* Imagem em public */}
      <img src="/img.jpg" alt="Alguma Imagem" />

      {/* Imagem em assets */}
      <img src={night} alt="Outra imagem" />     
    </div>
  )
}

export default App
