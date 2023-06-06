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
import TerminarPago from "../TerminarPago/TerminarPago";
import { format } from "date-fns";
import { DarkModeContext } from "../../context/DarkModeContext";





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

  const { darkMode } = useContext(DarkModeContext)




  /* uso del setCart del app.js para poder modificar el estado */
  const { agregarAlCarrito, isInCart } = useContext(CartContext)

   console.log('item ya esta en el carrito?', isInCart(itemData.id)) 

   const [cantidad, setCantidad] = useState(1);
   const [fecha, setFecha] = useState(null);
   console.log('cantidad',cantidad)
   console.log(fecha)

   /* calculo de checkin y checkout */

   const [startDate, setStartDate] = useState(null);
   console.log('checkIn',startDate)
   const [endDate, setEndDate] = useState(null);
   console.log('checkOut',endDate)
   
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
        },{}),
        formattedCheckIN: format(startDate, 'dd MMM yyyy'),
        formattedCkeckOUT: format(endDate, 'dd MMM yyyy')
    }
    agregarAlCarrito(newItem)
    console.log('formatedCHECKIN', formattedDateMin)
    
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
        <h1  className={darkMode ? 'dark-modeH1': 'green'}>{itemData.name}</h1>
      </div>
    </header>


    <div className="containerTitulo">
    <img className="img-fluid" src={itemData.img}></img>
    </div>

    <div className="contenedorDescripcion">
      <h2 className={darkMode ? 'dark-modeH2Desc': 'h2Desc'}>Descripcion</h2>
      <p className={darkMode ? 'dark-modeP': 'pDesc'}>{itemData.description}</p>
      <p className={darkMode ? 'dark-modeP': 'pDesc'}><strong>Precio: ${itemData.price} P/dia 1 persona</strong></p>
    </div>

    <div className="contenedorAmenities">
      <ul className="listaAmenities">

        <li>
          <div className="listaIcon">
          <FontAwesomeIcon icon={faShower} />
          </div>
          <div className="listaBody">
            <h3 className={darkMode ? 'dark-modeH3': 'h3Body'}>{itemData.detailTitle1}</h3>
            <p className={darkMode ? 'dark-modeP': ''}>{itemData.descDetail1}</p>
          </div>
        </li>

        <li>
        <div className="listaIcon">
        <FontAwesomeIcon icon={faTv} />
          </div>
          <div className="listaBody">
            <h3 className={darkMode ? 'dark-modeH3': 'h3Body'}>{itemData.detailTitle2}</h3>
            <p className={darkMode ? 'dark-modeP': ''}>{itemData.descDetail2}</p>
          </div>
        </li>

        <li>
        <div className="listaIcon">
        <FontAwesomeIcon icon={faSnowflake} />
          </div>
          <div className="listaBody">
            <h3 className={darkMode ? 'dark-modeH3': 'h3Body'}>{itemData.detailTitle3}</h3>
            <p className={darkMode ? 'dark-modeP': ''}>{itemData.descDetail3}</p>
          </div>
        </li>

      </ul> {/* fin de listaAmenities */}
    </div> {/* fin de contenedorAmenities */}


    {/* Seleccionador */}

    <div className="contSeleccionador">

       {/* para mostrar mns "terminar la compra" cuando reserve */}
      
       {
        isInCart(itemData.id)
        ?
       
       <TerminarPago/>
        :
        <>
        
       <SelectFecha setFecha={setFecha}
                   // options={fechas}
                   options={itemData}
                   price= {parseInt(itemData.price)}
                   totalPrice = {totalPrice}
                   setTotalPrice={setTotalPrice}
                   startDate={startDate}
                   setStartDate={setStartDate}
                   endDate={endDate}
                   setEndDate={setEndDate}
                   transformedStock= {itemData.stockPorDia.reduce((acc, stockString) => {
                   const [date, stock] = stockString.split(":");
                   acc[date] = parseInt(stock);
                   return acc;
    }, {})}
      />

<ItemCount stock={parseInt(itemData.stockPersonas)}
                  item={itemData}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  agregar = {handleAgregar}
       />




</>
       }


      {/* mostrar sub-total */}
       {
    totalFinal !== itemData.price 
    ?
    <h2 className={darkMode ? 'dark-modeH3': 'h3Body'}>Subtotal:{totalFinal}</h2>
    :
    <h2 className={darkMode ? 'dark-modeH3': 'h3Body'}>Subtotal: 0</h2>
   }
       </div>
    

      
    
      
   
   
   
 
      </div>
  )
}

 {/* <p>SubTotal: {itemData.price * cantidad}</p> */}
  {/*   <p>dates: {itemData.fechasDisponibles}</p> */}
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

{/*  <Link className="btn btn-success" to="/cart">Terminar mi pago</Link> */}