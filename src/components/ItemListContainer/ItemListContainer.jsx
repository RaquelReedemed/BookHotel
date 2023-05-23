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




export const ItemListContainer = () => {

 /*  const hook = useProductos()
  console.log(hook) */

  /* Desestructurando */

/*   const { loading, productos } = useProductos() */



   const [productos, setProductos] = useState([]); 
   const [loading, setloading] = useState(true); 
   console.log(productos); 

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


     /* pedirDatos()
     .then((data) => {
        if (!categoryId) {
          setProductos(data)
        } else{
           setProductos(data.filter((el) => el.category === categoryId ))
        }

      
      setloading(false)
     })
     .catch((error) => {
      console.log(error)
      setloading(false)
     }) */
  }, [categoryId]);  



  return (
    <div className="lista">
      <div className="container">
        <div className="encabezadoItem">
          <h2>Comfort y relajacion</h2>
          <ul>
            <li className="address">
              Villa ofrece habitaciones de comfort y relajacion. Todas ellas
              incluyen:
            </li>

            <li className="li-iconos">
              <div>
                <FontAwesomeIcon icon={faWifi} /> Free Wi-Fi
              </div>
              <div>
                <FontAwesomeIcon icon={faShower} /> Baño privado
              </div>
              <div>
                <FontAwesomeIcon icon={faSnowflake} /> Heladera
              </div>
            </li>
            <li className="li-iconos">
              <div>
                <FontAwesomeIcon icon={faTv} /> Televisor
              </div>
              <div>
                <FontAwesomeIcon icon={faWind} /> Aire Acondicionado
              </div>
              <div>
                <FontAwesomeIcon icon={faWaterLadder} /> Piscina
              </div>
            </li>
          </ul>
        </div>
        {/* fin encabezadoItem */}
      </div>

      <div>
       {
        loading
        ? 
        <Loader cargando={LoaderDisenio}/>
        :
        <ItemList items={productos}/>
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


/*   const resultado = 
   MOCK_DATA.map((data) => (
    <div className="card" key={data.id}>
      <div className="card-image">
        <img
          className="img-fluid"
          src={data.img}
        ></img>
      </div>
      <div className="card-body">
        <h3>{data.name}</h3>
        <p>
          {data.description}
        </p>
        <a href="#"><ShoppingCartIcon/>{data.price}</a>
      </div>
    </div>
  ));
  console.log(resultado); */