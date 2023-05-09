
import { Navbar } from "./components/Navbar/Navbar"
import { Inicio } from "./components/Inicio"
import { Balcon } from "./components/Balcon" 
import { Presidenciales } from "./components/Presidenciales"
import { Panoramicas } from "./components/Panoramicas"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

function App() {
 
  return (

    <BrowserRouter>
      
     <Navbar></Navbar>

      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/habitaciones/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/balcon" element={<Balcon/>}/>
      <Route path="/panoramicas" element={<Panoramicas/>}/>
      <Route path="/presidenciales" element={<Presidenciales/>}/> 

      <Route path="*" element={<Navigate to={"/"}/>}/>
     </Routes> 

     {/* otra manera de hacer ruta independiente para cada pagina */}

   {/*   <Routes>
      <Route path="/" element={<NavbarAlternativo/>}></Route>
      <Route path="/balcon" element={<Navbar></Navbar>}></Route>
     </Routes> */}
      

    </BrowserRouter>
    
     
   
  )
}

export default App
