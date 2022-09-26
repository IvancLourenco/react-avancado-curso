import React from 'react'

const Container = ({ children, myValue }) => {
  return (
    <div>
        <h1>Esse e o Titulo do Container</h1>
        {children}
        <p>Meu valor é: {myValue}</p>
    </div>
  )
}

export default Container