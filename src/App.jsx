/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */


import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Navbar } from "./components/Navbar/Navbar"
import { Slider } from "./components/Slider/Slider"


function App() {
 
  return (
    <div>
     <Navbar></Navbar>
      <Slider></Slider>
      <ItemListContainer></ItemListContainer>
    </div>
  )
}

export default App
