import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useEffect, useState } from "react";

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
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import SelectFecha from "../SelectFecha.jsx/SelectFecha";
import { CartContext } from "../../context/CartContext";


/* const fechas =[
  {
      value: "01/06/2023",
      label: "01/06/2023"
     
  },
  {
      value: "04/06/2023",
      label: "04/06/2023"
      
  },
  {
      value:"07/06/2023",
      label: "07/06/2023"
     
  }

] */

const ItemDetail = ({itemData}) => {

  /* uso del setCart del app.js para poder modificar el estado */
  const { agregarAlCarrito, isInCart } = useContext(CartContext)

   console.log('item ya esta en el carrito?', isInCart(itemData.id)) 

   const [cantidad, setCantidad] = useState(1);
   const [fecha, setFecha] = useState(null);
   console.log('cantidad',cantidad)
   console.log(fecha)
   
   /* calculo de precio por dia seleccionado */
   const [totalPrice, setTotalPrice] = useState(0);
   console.log('totalDias', totalPrice)

   /* calculo para suma el total de dias mas cantidad de personas */
   const [totalFinal, setTotalFinal] = useState(0);
   console.log('total final', totalFinal)

   const handleAgregar = () => {
    /* se crea un nuevo objeto con todas las propiedades de item y una nueva propiedad "cantidad" */
    const newItem = {
        ...itemData,
        cantidad,
        fecha,
        totalFinal,
        transformedStock: itemData.stockPorDia.reduce((acc, stockString) => {
          const [date, stock] = stockString.split(":");
          acc[date] = parseInt(stock);

          console.log('tipo dato date', typeof date);
          console.log('tipo dato date',typeof acc[date])
          return acc;
        },{})
    }
    agregarAlCarrito(newItem)

    


    /* const newCart = cart.slice() */ //se crea una copia de cart []
    /* newCart.push(newItem)  */       //se agrega el nuevo elemento al array vacio
   /*  setCart( [...cart, newItem] ) */ ///forma mas sencilla
}

const calcularTotalFinal = () => {
  const subtotal = itemData.price * cantidad;
  console.log('subtotal',subtotal)
  const total = subtotal + totalPrice;
  setTotalFinal(total)
}

useEffect(() => {
  calcularTotalFinal()
}, [cantidad, totalPrice]);

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
      <p><strong>Precio: ${itemData.price} P/dia</strong></p>
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

      </ul> {/* fin de listaAmenities */}
    </div> {/* fin de contenedorAmenities */}

      
       <SelectFecha setFecha={setFecha}
                   // options={fechas}
                   options={itemData}
                   price= {parseInt(itemData.price)}
                   totalPrice = {totalPrice}
                   setTotalPrice={setTotalPrice}
                   transformedStock= {itemData.stockPorDia.reduce((acc, stockString) => {
    const [date, stock] = stockString.split(":");
    acc[date] = parseInt(stock);
    return acc;
  }, {})
    }
       />
       {
        isInCart(itemData.id)
        ?
        <Link className="btn btn-success" to="/cart">Terminar mi pago</Link>
        :
        <ItemCount stock={parseInt(itemData.stockPersonas)}
                  item={itemData}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  agregar = {handleAgregar}
       />
       }
    
       <div className="cont-btn-reserva">
       
       <p>SubTotal: {itemData.price * cantidad}</p>
       </div>
       <p>dates: {itemData.fechasDisponibles}</p>
   
   {
    totalFinal !== itemData.price 
    ?
    <h2>Subtotal:{totalFinal}</h2>
    :
    <h2>Subtotal: 0</h2>
   }
 

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

