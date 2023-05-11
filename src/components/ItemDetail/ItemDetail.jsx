import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

import React from 'react'

const ItemDetail = ({itemData}) => {
  return (
    <div>

    <header>
      <div className="containerTitulo">
        <h1 className="green">{itemData.name}</h1>
      </div>
    </header>


    <div className="containerImagen">
    <img className="img-fluid" src={itemData.img}></img>
    </div>

    <div className="contenedorDescripcion">
      <h2>Descripcion</h2>
      <p>{itemData.description}</p>
    </div>

    <div className="contenedorAmenities">
      <ul className="listaAmenities">

        <li>
          <div className="listaIcon">
          <FontAwesomeIcon icon={faShower} />
          </div>
          <div className="listaBody">
            <h3>{itemData.detailTitle1}</h3>
            <p>{itemData.descDetail1}</p>
          </div>
        </li>

        <li>
        <div className="listaIcon">
        <FontAwesomeIcon icon={faTv} />
          </div>
          <div className="listaBody">
            <h3>{itemData.detailTitle2}</h3>
            <p>{itemData.descDetail2}</p>
          </div>
        </li>

        <li>
        <div className="listaIcon">
        <FontAwesomeIcon icon={faSnowflake} />
          </div>
          <div className="listaBody">
            <h3>{itemData.detailTitle3}</h3>
            <p>{itemData.descDetail3}</p>
          </div>
        </li>

      </ul>

    </div>
       
        
      </div>
  )
}

export default ItemDetail

library.add(
  faHouse,
  faWifi,
  faShower,
  faTv,
  faWind,
  faSnowflake,
  faWaterLadder
);



{/* <div className="card">
<div className="card-image">
          <img className="img-fluid" src={itemData.img}></img>
        </div>

        <div className="card-body">
          <h3>{itemData.name}</h3>
          <p>{itemData.description}</p>
         
        </div>
        <div className="contNavCart">
       <button><ShoppingCartIcon/>{itemData.price}$</button> 
        </div>


</div> */}
