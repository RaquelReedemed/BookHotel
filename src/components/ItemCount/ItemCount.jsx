

const ItemCount = ({stock, cantidad, setCantidad, agregar }) => {

    

    const handlerestar = () => {
       cantidad > 1 &&  setCantidad(cantidad - 1)  /* se agrega &&, ya que si detecta que la cantidad es menor 1 no se evalue la resta */
    }

    const handleSumar = () => {
       cantidad < stock && setCantidad(cantidad + 1)  /* se coloca dentro de parentesis para que la suma se evalue primero y luego se asigne a SetCantidad() para que se actualice el estado */
    }

   
    
    return (
      <div>
      <h4 className="dark">Seleccione cantidad de personas</h4>
        <div className="wrapper">
         
         <span 
         onClick={handlerestar}
         className={`minu ${cantidad === 1 ? "danger-color" : ""}`}
         disabled={cantidad === 1}
         >
         -
         </span>

         <span className="num">{cantidad}</span>

         <span
         onClick={handleSumar} 
         className={`plus ${cantidad === stock ? "danger-color" : ""}`}
         >
         +
         </span>      
        </div>

     <div className="contSeleccionador">
       <button 
           onClick={agregar} 
           className="cta">
           <span>Reservar</span>
           <svg viewBox="0 0 13 10" height="10px"
           width="15px">
           <path d="M1,5 L11,5"></path>
           <polyline points="8 1 12 5 8 9"></polyline>
           </svg>
         </button> 
     </div>

        

        </div>
    );
}

export default ItemCount;


{/* <button 
          onClick={handlerestar}
          className={`btn mx-1 ${cantidad === 1 ? "btn btn-outline-danger" : "btn btn-outline-primary"}`}
          disabled={cantidad === 1}>
           -
           </button>

          <span className="mx-2">{cantidad}</span>

          <button
           onClick={handleSumar}
           className={cantidad === stock ? "btn btn-danger" : "btn btn-primary"}
           disabled={cantidad === stock}>
           +
           </button>
          <br/>
          
           <button 
           onClick={agregar} 
           className="btn btn-success">
           Reservar
           </button>     */}