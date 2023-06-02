import logo from "../../assets/logo.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Button, Dropdown } from "react-bootstrap";

import { CartWidget } from "../CartWidget/CartWidget";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faToggleOn,
         faToggleOff,
         faMoon,
         faSun
} from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "../../context/DarkModeContext";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import classNames from "classnames";

export const Navbar = () => {
  const [active, setActive] = useState("nav_collapse");
  console.log(active);

  /* Modo oscuro */
  const { darkMode, changeMode } = useContext(DarkModeContext)


  /* Desaparecer carrito cuando este en cero */
  const { cart } = useContext(CartContext)

  /* logueado */
  const { user, logout } = useContext(AuthContext)
  console.log('logout',logout)

  const navHamb = () => {
    active === "nav_collapse"
      ? setActive("nav_collapse navActive")
      : setActive("nav_collapse");
  };

  return (
    <nav className='nav'>
      <ul className="nav_ul">
        <li className="nav_logo">
          {" "}
        <Link to="./"><img src={logo} alt="logo"></img></Link> 
        </li>

        <li className="nav_item">
          <Link to="/">Inicio</Link>
        </li>
         <li className="nav_item">
          <Link to="/habitaciones/balcon">Balcon</Link>
        </li> 
        <li className="nav_item">
          <Link to="/habitaciones/panoramica">Panoramica</Link>
        </li>
        <li className="nav_item">
          {" "}
          <Link to="/habitaciones/presidencial">Presidencial</Link>
        </li>
        <li className="nav_item">
        <Link>{darkMode 
             ?
             <FontAwesomeIcon className='on' onClick={changeMode} icon={faMoon}/>
             :
             <FontAwesomeIcon className='on' onClick={changeMode} icon={faSun}/>
             }
        </Link>
        </li>
      </ul>

    

      <ul className="nav_ul">
        <Link className="nav_item">Contactanos</Link>
        <li className="cart">
        {
          cart.length > 0 && <CartWidget/>

        }
          
        </li>
        <li className="contBtnLogout">
          {/*   <p>Bienvenido {user.email}</p> */}
            <Link className="btnLogout" onClick={logout}>Logout</Link>
        </li>
        <li className="icon_toggle">
          <a className="icon_toggle-mobile">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </li>
      </ul>

      {/* version mobile */}
      {/* ocultar en desktop */}

      <div className="nav_mobile">
        <li  className="nav_logo-mobile">
        <Link to="./"><img src={logo} alt="logo"></img></Link>
        <Link to="/"> <p>Inicio</p></Link>
        {/* <button className="btn btn-info" onClick={changeMode} >Modo</button> */}
        <p>{darkMode 
             ?
             <FontAwesomeIcon className='on' onClick={changeMode} icon={faMoon}/>
             :
             <FontAwesomeIcon className='on' onClick={changeMode} icon={faSun}/>
             }
        </p>
        </li>

        <div className="cont_icons-mobile">
          <li className="cart-mobile">
            <CartWidget />
          </li>
          <li onClick={navHamb} className="icon_toggle-mobile">
            <a>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </li>
        </div>
      </div>

      {/*className="nav_collapse"  */}
      <div className={active}>
        <ul>

          <li onClick={navHamb}>
          <Link to="/habitaciones/balcon">Habitacion con Balcon</Link>
          </li>

          <li onClick={navHamb}>
          <Link to="/habitaciones/panoramica">Habitacion Panoramica</Link>
        </li>
         
          <li onClick={navHamb}>
          <Link to="/habitaciones/presidencial">Habitacion Presidencial</Link>
          </li>

          <li onClick={navHamb}>
          <Link to="/contacto"> Contactanos</Link>
          </li>

          {/* <li>
            <p>Bienvenido {user.email}</p>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
          </li> */}

          <li className="contBtnLogout-mov">
            <p>Bienvenido {user.email}</p> 
            <Link className="btnLogout" onClick={logout}>Logout</Link>
        </li>
        </ul>
      </div>
    </nav>
  );
};

library.add(faBars,
            faToggleOn,
            faToggleOff,
            faMoon,
           faSun);
