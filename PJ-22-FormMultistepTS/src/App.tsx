import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import UserForm from './components/UserForm'
import Thanks from './components/Thanks'
import ReviewForm from './components/ReviewForm'
import Steps from './components/Steps'

import { useForm } from './hooks/useForm'



import './App.css'

function App() {

  const formComponents = [
      <UserForm />,
      <ReviewForm />,
      <Thanks />
  ]
  const {currentStep, currentComponent, changeStep} = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        {currentComponent}
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="input-container">
            <div className="actions">
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              <button>
                <GrFormNext />
                <span>Avançar</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
