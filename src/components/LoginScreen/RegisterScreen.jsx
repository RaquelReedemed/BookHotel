import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const RegisterScreen = () => {
     
    const { register } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
         setValues({
           ...values,
           [e.target.name]: e.target.value
         })
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      register(values)
    }


    return (
        <div className='login'>
         <div className='login-container'>
            <h2>Registrarme</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                value={values.email}
                type="email" 
                className="form-control my-2" 
                placeholder="Email"
                name="email"
                onChange={handleInput}>
                </input>

                <input 
                value={values.password}
                type="password" 
                className="form-control my-2" 
                placeholder="Contrasenia"
                name="password"
                onChange={handleInput}>
                </input>
                <button className="btn btn-primary" type="submit">Registrarme</button>
                <Link to="/login">Ya estoy registrado, iniciar secion</Link>
            </form>
         </div>    
        </div>
    );
}

export default RegisterScreen;



