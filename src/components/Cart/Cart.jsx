import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";

const Cart = () => {
  const { cart, emptyCart, totalCarrito, removeItem } = useContext(CartContext);

  const { darkMode } = useContext(DarkModeContext)


  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito esta vacio</h2>
        <hr />
        <Link to="/" className="btn btn-primary">
          Ir al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="contReserva">

    <div className="contTituloReserva">
    <h1>Tu reserva</h1>

    </div>
    
    <hr />

     <div className="gridItems">

     
      <div className="grid-container">  
        
        { 
            cart.map((item) =>(
                <div className="cardCarrito card">

                 <div>
                  <header>
                    <img className="img-fluid" src={item.img}></img>
                  </header>

                  <section>
                    <h2>{item.name}</h2>
                    <h4>Check-IN: {item.formattedCheckIN}</h4>
                    <h4>Check-Out {item.formattedCkeckOUT}</h4>
                    <p>Para: {item.cantidad} {item.cantidad === 1 ? 'persona' : 'personas'}</p>
                  {/*   <p>Subtotal: {item.price * item.cantidad}</p> */}     
                  </section>
                 </div>

                 <footer>
                  <p>Sub-Total: {item.totalFinal}$</p> 
                  <button
                  onClick={() => removeItem(item.id)}
                  className="btnDelete"
                  >
                  <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                  {/* <FontAwesomeIcon icon={faTrash} /> */}
                 </button>
                 </footer>

                </div>
            ))
        }

      </div> {/* fin grid */}

      </div>


      <div className="contTotalPagar">
      <h3 className={darkMode ? 'dark-modeH3': 'h3Body'} >Total a pagar: ${totalCarrito()}</h3>
      </div>
     
        <hr />

        <div className="contCheck">

        <button 
          onClick={emptyCart} 
          className="buttonVaciar">
          Vaciar carrito
        </button>

        <div >
        <Link to="/checkout" className="buttonTerminarCompra">
          Terminar mi compra
        </Link>
        </div>
        
        </div>
    </div>
  );
};

export default Cart;

library.add(faTrash);
