

import { Inicio } from "./components/Inicio"


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { CartProvider } from "./context/CartContext"
import { DarkModeProvider } from "./context/DarkModeContext"

import { AuthProvider } from "./context/AuthContext"
import AppRouter from "./components/router/AppRouter"



function App() {



  return (

     <AuthProvider> 
    <CartProvider>
      <DarkModeProvider>
       <AppRouter/>
    </DarkModeProvider>
    </CartProvider>
     </AuthProvider> 

  )
}



export default App

{/*  {logueado && <Route to="checkout"/>} */} 

  {/* <Route path="*" element={<Navigate to={"/"}/>}/> */}
     {/* otra manera de hacer ruta independiente para cada pagina */}

   {/*   <Routes>
      <Route path="/" element={<NavbarAlternativo/>}></Route>
      <Route path="/balcon" element={<Navbar></Navbar>}></Route>
     </Routes> */}
      