import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

type Props = {}

const Context = (props: Props) => {

    const details = useContext(AppContext)

  return (
    <>
        {details && (
            <div>
                <h2>Linguagem: {details.language}</h2>
                <h4>FW: {details.framework}</h4>
                <p>QTD: {details.projects}</p>
            </div>
        )}
    </>
  )
}

export default Context