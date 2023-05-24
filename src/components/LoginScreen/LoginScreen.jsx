import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const LoginScreen = () => {
  
   const { login } = useContext(AuthContext)

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
      
      login(values)
      console.log(values)
      console.log(login)
    }


    return (
        <div className='login'>
         <div className='login-container'>
            <h2>Login</h2>
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
                <button className="btn btn-primary" type="submit">Login</button>
                <Link to="/register">Registrarme</Link>
            </form>
         </div>    
        </div>
    );
}

export default LoginScreen;






