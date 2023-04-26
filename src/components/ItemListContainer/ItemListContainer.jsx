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

import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";




export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true);
  console.log(productos);

     useEffect(() => {
     
      setloading(true)

    pedirDatos()
     .then((res) => {
      setProductos(res)
      setloading(false)
     })
     .catch((error) => {
      console.log(error)
      setloading(false)
     })
  }, []); 



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
      {
        loading
        ? <h2>Cargando...</h2>
        :
        <ItemList items={productos}/>
      }

      
      
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