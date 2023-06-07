
import React, { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
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
         items: cart.map(item => ({
            id: item.id, 
            nombre: item.name, 
            cantidad: item.cantidad})),
         total: totalCarrito() ,
         fyh: new Date(),
         transformedStock: cart.map(item => item.transformedStock)
       }
       console.log(orden)

       orden.items.forEach((item) => {
          const itemRef = doc(db, "habitaciones", item.id)/*se crea referencia a cada iteracion a un doc en la db*/
       console.log('este es item.id',item.id)
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
        addDoc(ordersRef, orden)
         .then((doc) => {
            setOrderId(doc.id)
            emptyCart()  //para vaciar el carrito cuando se genera la orden
         }) 
    }  

    if(orderId) {
        return(
            <div className='contFinOrden'>
             
<div className="cardCheckout">
  <div className="card-top-part">
    <div className="left-part">
      <div className="user-name">
        <p className="name">{values.nombre}</p>
        
      </div>
      <div className="user-position">
        <p className="position">
        Su orden ha sido creada con exito
      </p>
      <p>{orderId}</p>
      </div>
    </div>
    <div className="right-part">
      <div className="user-photo">
        <img  src="https://randomuser.me/api/portraits/women/79.jpg" className="photo"/>
      </div>
    </div>
  </div>
  <div className="card-bottom-part">
    <div className="bottom-part">
      <a href="mailto: example@example.com" className="linkCheck">
        <span className="iconCheck"> 
          {/* <svg viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
            <path transform="translate(1.25 3.75)" d="M16.25,12.5h-15A1.252,1.252,0,0,1,0,11.25v-10A1.252,1.252,0,0,1,1.25,0h15A1.251,1.251,0,0,1,17.5,1.25v10A1.251,1.251,0,0,1,16.25,12.5ZM1.25,1.819V11.25h15V1.819L9.106,6.763a.626.626,0,0,1-.713,0ZM2.625,1.25,8.75,5.487,14.875,1.25Z" id="Fill"></path>
          </svg> */}
        </span>
        <Link to="/">Volver</Link>
      </a>
    </div>
    <div className="bottom-part">
      <a href="tel: 0123456789" className="linkCheck">
        <span className="iconCheck"> 
          <svg viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
            <path transform="translate(1.869 1.875)" d="M14.381,16.25h-.106C2,15.544.249,5.179.006,2.019A1.874,1.874,0,0,1,1.731,0H5.175A1.243,1.243,0,0,1,6.337.787l.95,2.337a1.247,1.247,0,0,1-.275,1.35L5.681,5.818a5.875,5.875,0,0,0,4.738,4.75l1.356-1.344a1.25,1.25,0,0,1,1.356-.257l2.356.944a1.245,1.245,0,0,1,.769,1.163v3.3A1.877,1.877,0,0,1,14.381,16.25Zm-12.5-15a.625.625,0,0,0-.625.625v.05C1.545,5.648,3.4,14.375,14.343,15h.038a.625.625,0,0,0,.625-.589V11.075l-2.356-.944-1.794,1.781-.3-.038A6.733,6.733,0,0,1,5.429,8.553,8.171,8.171,0,0,1,4.381,5.7l-.038-.3L6.118,3.606,5.181,1.25Z" id="Fill"></path>
          </svg>
        </span>
          Phone
      </a>
    </div>
  </div>

  
</div>

</div>  /* fin de orden */
           
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


 {/* <div className='container my-5'>
             <h2>Tu compra se registro exitosamente</h2>
             <hr/>
             <p>Guarda tu numero de orden: {orderId}</p>

             <Link to="/">Volver</Link>
            </div> */}