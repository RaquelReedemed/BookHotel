import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faWifi,
  faShower,
  faTv,
  faWind,
  faSnowflake,
  faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";
import { Description } from "@mui/icons-material";
import { useState, useEffect } from "react";


/* import { pedirDatos } from "../../helpers/pedirDatos"; */
import ItemList from "../ItemList/ItemList";

import LoaderDisenio from "../../components/Loader/LoaderDisenio"
import Loader from "../Loader/Loader";
/* import { useProductos } from "../../hooks/useProductos"; */
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore"; /*para armar la referencia, "getDocs" en plural para traer una coleccion  */
import { db } from "../../firebase/config";
import ItemListCatego from '../Categorias/ItemListCatego';
import { DarkModeContext } from '../../context/DarkModeContext';




export const ItemListId = () => {
  
  const { darkMode } = useContext(DarkModeContext)


   const [productos, setProductos] = useState([]); 
   const [loading, setloading] = useState(true); 
   console.log('productos', productos); 

  const { categoryId } = useParams()
  console.log(categoryId)

     useEffect(() => {
      setloading(true)

      //pidiendo datos del firebase

      //1-Armar una referencia (sync), decirle a firebase de donde quiero consumir la db usando { collections }
      const productosRef = collection(db, "habitaciones")
      const q = categoryId
                ? query(productosRef, where("category", "==", categoryId))
                :
                productosRef
     
      //2-consumir esa referencia (async), decirle que TRAIGA esa coleccion usando getDocs()
      getDocs(q) //retorna una promesa con el resultado
        .then((res) => {
          const docs = res.docs.map((doc) => {
             return {
               ...doc.data(),
               id: doc.id
             }
          } )
          console.log('respuesta', docs)
          console.log('data', res.docs[0].data())
          setProductos(docs)
        })
        .catch(e => console.log(e))
        .finally(() => setloading(false))
  }, [categoryId]);  



  return (
    <div className="lista">

    <div className='containerTitulo'>

     {
      productos.map((data) => (
        <h1 className={darkMode ? 'dark-modeH1': 'green'}>{data.nameCatego}</h1>
      ))
     }
     </div>
   
      <div>
       {
        loading
        ? 
        <Loader cargando={LoaderDisenio}/>
        :
        <ItemListCatego items={productos}/>
      } 
      </div>

     
      {/* fin grid-container */}
    </div>
  );
};

library.add(
  faHouse,
  faWifi,
  faShower,
  faTv,
  faWind,
  faSnowflake,
  faWaterLadder
);


