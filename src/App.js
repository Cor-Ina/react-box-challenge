

import React from "react"
import boxes from "./boxes"
import Box from "./Box"
import './App.css';

export default function App(props) {

  const [squares, setSquares] = React.useState(boxes)

  
  function toggle(id) {
    setSquares(prevSquares => {
      const newSquares =[]
      for (let i = 0; i < prevSquares.length; i++) {
        if (prevSquares[i].id === id) {
          const updatedSquare = {
            ...prevSquares[i],
            on: !prevSquares[i].on
          }
          newSquares.push(updatedSquare)
        } else {
          newSquares.push(prevSquares[i])
        }
      }
      return newSquares
    })
  }


  const squareElements = squares.map(square => (
    <Box 
      on = {square.on} 
      key = {square.id} 
      id = {square.id}
      handleClick = {toggle}/>)
  )

  return (
    <main>
        {squareElements}
    </main>
  )
}
