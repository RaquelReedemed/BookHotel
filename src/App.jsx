
import { Navbar } from "./components/Navbar/Navbar"
import { Inicio } from "./components/Inicio"


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Error404 from "./components/Error404"

function App() {
 
  return (

    <BrowserRouter>
      
     <Navbar></Navbar>

      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/habitaciones/:categoryId" element={<ItemListContainer/>}/>
      <Route path="detail/:itemId" element={<ItemDetailContainer/>}/>

      {/* <Route path="*" element={<Navigate to={"/"}/>}/> */}
      <Route path="*" element={<Error404/>}></Route>

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
