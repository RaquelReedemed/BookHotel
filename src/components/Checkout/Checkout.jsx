
import React, { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db  } from '../../firebase/config'; /* para armar el collection */
import { Link } from 'react-router-dom';

const Checkout = () => {

    const { cart, totalCarrito, emptyCart } = useContext(CartContext)
    
    /* const para que se renderice el mail del usuario logueado */
    const { user } = useContext(AuthContext)

    /*const para que el form muestre una vista diferente cuando se preciona el boton enviar   */
    const [orderId, setOrderId] = useState(null);

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: user.email
    });

    const handleInput = (e) => {
        setValues({
            ...values,  //se copian todos los valores anteriores
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       console.log("Submit")
       console.log(values)
   
       const { nombre, direccion, email } = values
        if(nombre.length < 3) {
            alert("el nombre es demasiado corto")
            return
        }

        if(direccion.length < 3) {
            alert("Direccion invalida")
            return
        }

        if(email.length < 5) {
            alert("Email invalido")
            return
        }

       const orden = {
         client: values,
         items: cart.map(item => ({id: item.id, nombre: item.name, cantidad: item.cantidad})),
         total: totalCarrito() ,
         fyh: new Date()
       }
       console.log(orden)

       orden.items.forEach((item) => {
          const itemRef = doc(db, "habitaciones", item.id)

        /* funcion para descontar cantidad de stock y actualizar en la */
          getDoc(itemRef)
            .then((doc) => {
                if (doc.data().stock >= item.cantidad){
                    updateDoc(itemRef, {
                        stock:  doc.data().stock - item.cantidad
                      })
                } else{
                    alert('No hay stock de ' + item.name)
                }
                
            } 
            )

         
       })

       const ordersRef = collection(db, "orders")
       /* el post responde con un snapcha */
      /*  addDoc(ordersRef, orden)
         .then((doc) => {
            setOrderId(doc.id)
            emptyCart()  //para vaciar el carrito cuando se genera la orden
         }) */
    }  

    if(orderId) {
        return(
            <div className='container my-5'>
             <h2>Tu compra se registro exitosamente</h2>
             <hr/>
             <p>Guarda tu numero de orden: {orderId}</p>

             <Link to="/">Volver</Link>
            </div>
        )
    }

    if(cart.length === 0) {
       return <Navigate to="/"/>
    }

    return (
        <div className='container my-5'>
        <h2>Checkout</h2>
        <hr/>
       {/* name: se usa para saber cual input se esta modificando */}
        <form onSubmit={handleSubmit}>
            <input
              className='form-control my-2'
              type='text'
              placeholder='Nombre'
              value={values.nombre}
              name='nombre'
              onChange={handleInput}>  
            </input>

            <input
              className='form-control my-2'
              type='text'
              placeholder='Direccion'
              value={values.direccion}
              name='direccion'
              onChange={handleInput}>
            </input>

            <input
              className='form-control my-2'
              type='email'
              placeholder='Email'
              value={values.email}
              name='email'
              onChange={handleInput}
              readOnly>
              
            </input>

            <button className='btn btn-primary' type='submit'>Enviar</button>
        </form>
            
        </div>
    );
}

export default Checkout;
