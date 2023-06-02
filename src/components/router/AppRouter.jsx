
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { Navbar } from '../Navbar/Navbar';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Error404 from '../Error404/Error404';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegisterScreen from '../LoginScreen/RegisterScreen';
import { Inicio } from '../Inicio';
import Contacto from '../Contacto/Contacto';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import { ItemListId } from '../ItemListId.jsx/ItemListId';
import CargaLogin from '../CargaLogin/CargaLogin';


const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return (
        <BrowserRouter>
            {
      user.logged
      ?
      <>
      <Navbar/>
      {/* Rutas privadas */}
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/habitaciones/:categoryId" element={<ItemListId/>}/>
      <Route path="detail/:itemId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
        {/*  <Route path="*" element={<Error404/>}></Route>   */} 
       <Route path="/carga" element={<CargaLogin/>}></Route>
        <Route path='*' element={<Navigate to={"/"}/>}/> 
     </Routes>
      </>
      :
      <Routes>
      {/* Rutas publicas */}
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
          <Route path="*" element={<Navigate to="/login"/>}></Route>  
          <Route path="/carga" element={<CargaLogin/>}></Route>
      </Routes>
    }
        </BrowserRouter>
 
        
    );

   

    

}



{/* <>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/habitaciones/:categoryId" element={<ItemListContainer/>}/>
      <Route path="detail/:itemId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      {
        user.logged
        ? <>
            <Route to="/checkout" element={<Checkout/>}></Route>
        </>
        :
        null
      }
      <Route path='*' element={<Navigate to={"/"}/>}/>
</> */}




export default AppRouter;
