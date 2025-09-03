import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

import UserForm from './components/UserForm'
import Thanks from './components/Thanks'
import ReviewForm from './components/ReviewForm'
import Steps from './components/Steps'

import { useForm } from './hooks/useForm'

import { useState } from 'react'


import './App.css'

type FormFields = {
  name: string,
  email: string,
  review: string,
  comment: string
}
const formtemplate: FormFields = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {

  const [data, setData] = useState(formtemplate)

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [
      <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
      <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
      <Thanks data={data}/>
  ]
  const {currentStep, currentComponent, changeStep, isLastStep} = useForm(formComponents)

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
              {!isLastStep ? (<button>
                <GrFormNext />
                <span>Avançar</span>
              </button>) : (<button>
                <FiSend />
                <span>Enviar</span>
              </button>)}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
