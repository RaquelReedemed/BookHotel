import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Cart = () => {
   
     const { cart, emptyCart, totalCarrito, removeItem } = useContext(CartContext)

     if(cart.length === 0) {
        return(
            <div>
             <h2>Tu carrito esta vacio</h2>
             <hr/>
             <Link to="/" className="btn btn-primary">Ir al inicio</Link>
            </div>
        )
     }

    return (
        <div className="container my-5">

       
            <h2>Tu reserva</h2>
        <hr/> 

        {
            cart.map((item) => (
                <div key={item.id}>
                <h3>{item.name}</h3>
                <div className="contImg">
                <img src={item.img}/>
                </div>
                <p>Cantidad: {item.cantidad}</p>
                <p>Subtotal: {item.price * item.cantidad}</p>
{/* removeItem se debe pasar por referencia, es decir con una funcion flecha que retorne el valor de removeItem con el id, es decir capurar el id*/}
                 <button onClick={() => removeItem(item.id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button> 
                <hr/>
                </div> 
            ))
        }
        <h3>Total a pagar: ${totalCarrito()}</h3>
        <hr/>
        <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
        <Link to="/checkout" className="btn btn-success">Terminar mi compra</Link>
            
        </div>
    );
}

export default Cart;

library.add(
    faTrash
)
