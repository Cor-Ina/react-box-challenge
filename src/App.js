

import React from "react"
import boxes from "./boxes"
import Box from "./Box"
import './App.css';

export default function App(props) {

  const [squares, setSquares] = React.useState(boxes)

  const squareElements = squares.map(square => (
    <Box on = {square.on} key={square.id} />)
  )


  return (
    <main>
        {squareElements}
    </main>
  )
}
