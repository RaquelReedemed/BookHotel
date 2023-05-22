
import React from 'react';
import { useState } from 'react';

const Contacto = () => {

      /* almacenar los estados */
      const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
      });

      const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            /* ...values */ //es lo mimso que lo de abajo
            nombre: values.nombre,
            email: values.email,
            direccion: values.direccion,
            [e.target.name] : e.target.value
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        console.log(values)
        
       }
   
   
 
   //METODO LARGO PARA ALMACENAR
   /* const [nombre, setNombre] = useState('');
   const [email, setEmail] = useState('');
   const [direccion, setDireccion] = useState(''); */

  /*  const handleNombre = (e) => {
    console.log(e.target.value)
    setNombre(e.target.value)
   }

   const handleEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value)
   }

   const handleDireccion = (e) => {
    console.log(e.target.value)
    setDireccion(e.target.value)
   } */



    return (
        <div>
            <h2>Contacto</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
               // onChange={handleNombre} 
                name='nombre'
                value={values.nombre}
                onChange={handleInputChange}
                className='form-control my-2' 
                type='text'
                placeholder='Tu nombre'
                />
                 <input 
               // onChange={handleEmail} 
                name='email'
                value={values.email}
                onChange={handleInputChange}
                className='form-control my-2' 
                type='text'
                placeholder='Email'
                />
                <input 
               // onChange={handleDireccion}
                name='direccion'
                value={values.direccion}
                onChange={handleInputChange}
                className='form-control my-2' 
                type='text'
                placeholder='Direccion'
                />
                <button 
                className='btn btn-primary' 
                type='submit'>Enviar</button>
            </form>
        </div>
    );
}

export default Contacto;

