import './App.css'


// 2 - Imagem em assets
import night from "./assets/night.jpg"

// 3 - useState
import Data from './components/Data'

// 4 - Listas
import Lista from './components/Lista'

function App() {

  return (
    <div>
      <h1>Avançando em React</h1>
      {/* useState */}
      <Data />

      {/* list */}
      <Lista />

      {/* Imagem em public */}
      <img src="/img.jpg" alt="Alguma Imagem" />

      {/* Imagem em assets */}
      <img src={night} alt="Outra imagem" />


    </div>
  )
}

export default App
