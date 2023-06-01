import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, emptyCart, totalCarrito, removeItem } = useContext(CartContext);


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
    <div>
    <h2>Tu reserva</h2>
    <hr />

     
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




      {/*   {
            cart.map((item) => (
          <div key={item.id} className="card">
            <div lassName="card-image">
              <img className="img-fluid" src={item.img}></img>
            </div>

            <div className="card-body">
              <h3>{item.name}</h3>
              <p>Check-IN: {item.formattedCheckIN} Check-Out {item.formattedCkeckOUT}</p>
              <p>Cantidad: {item.cantidad} personas</p>
              <p>Subtotal: {item.price * item.cantidad}</p>
              <p>Total: {item.totalFinal}</p>
            </div>

            <div className="contNavCart">
              <button
                onClick={() => removeItem(item.id)}
                className="btn btn-danger"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>

          </div>
        ))} */}
      </div> {/* fin grid */}

      <h3>Total a pagar: ${totalCarrito()}</h3>
        <hr />
        <button onClick={emptyCart} className="btn btn-danger">
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Terminar mi compra
        </Link>
    </div>
  );
};

export default Cart;

library.add(faTrash);
