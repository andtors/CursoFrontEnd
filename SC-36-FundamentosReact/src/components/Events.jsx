import React from 'react'

const Events = () => {

    const handleClick = (e) =>{
        alert("Executou")
        console.log(e)
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa...</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={() => alert("Testando um evento")}>Clique Aqui!</button>
        </div>
        <br />
        <div>
            <button onClick={handleClick}>Clique Aqui! - com função</button>
        </div>

        {renderSomething(true)}
        {renderSomething()} {/* ou false */}
    </div>
  )
}

export default Events