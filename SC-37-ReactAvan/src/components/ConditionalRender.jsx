import React from 'react'

const ConditionalRender = () => {
    const x = true

    const name = "Matheus"

  return (
    <div>
        {/* render condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p>}

        <h3>Render Ternario</h3>
        {name === "João" ? (
            <div>
                <p>Olá João!</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender