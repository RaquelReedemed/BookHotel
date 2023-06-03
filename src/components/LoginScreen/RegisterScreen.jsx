import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope,
         faToggleOn,
         faToggleOff
 } from '@fortawesome/free-solid-svg-icons';

 import useLocalStorage from 'use-local-storage';
import { useNavigate } from 'react-router-dom';



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

    const [navi, setNavi] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault()

      register(values)
    }

    /* modo oscuro */

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : light)

    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme)
    }


    return (

      <>
        {
          navi && <Navigate to="carga"/>
        }
        <div className='pagLogin' data-theme={theme}>
        <div className='login'>
           <h1>Registrarme</h1>
         <div className='container'>
         <div className='theme-toggle1'>
         <p></p>  
               
          </div>
            
              <form onSubmit={handleSubmit}>
              <label>Email</label>
                <input 
                value={values.email}
                type="email" 
               // className="form-control my-2" 
                placeholder="Enter your email"
                name="email"
                onChange={handleInput}>
                </input>
              <label>Password</label>
                <input 
                value={values.password}
                type="password" 
            //    className="form-control my-2" 
                placeholder="Enter your password"
                name="password"
                onChange={handleInput}>
                </input>

                
                 <button type="submit">Registrarme</button>
                

                <div className='bottom'>
                 <Link className='create' to="/login">Ya estoy resgistrado</Link>
                </div>     
            </form> 

           
           
            <hr/>
            
           
{/*                 <button className="btn btn-primary" type="submit" onClick={loginWithGoogle}>Ingresar con Google</button>
 */}                  
         </div>    
        </div>
        <div className='theme-toggle'>
                   <h2>Light Theme</h2>
                   <FontAwesomeIcon className='on' onClick={switchTheme} icon={faToggleOn}/>
                </div>
        </div>
        </>
    );
}

export default RegisterScreen;


library.add(
  faEnvelope,
  faToggleOn,
  faToggleOff
)

















/* import React, { useContext } from 'react';
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
 */


