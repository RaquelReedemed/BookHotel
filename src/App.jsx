


import { CartProvider } from "./context/CartContext"
import { DarkModeProvider } from "./context/DarkModeContext"

import { AuthProvider } from "./context/AuthContext"
import AppRouter from "./components/router/AppRouter"

import useLocalStorage from "use-local-storage"



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
      