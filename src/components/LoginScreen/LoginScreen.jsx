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



const LoginScreen = () => {
  
   const { login, loginWithGoogle } = useContext(AuthContext)

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
      
      login(values)
          setNavi("/carga")
      
      
      console.log(values)
      console.log(login)
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
           <h1>Login</h1>
         <div className='container'>
         <div className='theme-toggle1'>
         <p></p>

         <div className='bottom'>
                 <Link className='create' type="submit" onClick={loginWithGoogle}>Login with Google<FontAwesomeIcon id='iconCarta' icon={faEnvelope}/></Link>
                </div>   
               
          </div>
            
           <p className='divider'><span>Or</span></p>
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

                
                 <button type="submit">Log In</button>
                

                <div className='bottom'>
                 <Link className='create' to="/register">Create Account</Link>
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

export default LoginScreen;


library.add(
  faEnvelope,
  faToggleOn,
  faToggleOff
)



