import logo from "../../assets/logo.svg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Button, Dropdown } from "react-bootstrap";

import { CartWidget } from "../CartWidget/CartWidget";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "../../context/DarkModeContext";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

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
    <nav className="nav">
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
      </ul>

    

      <ul className="nav_ul">
        <li className="nav_item">Contactanos</li>
        <li className="cart">
        {
          cart.length > 0 && <CartWidget/>

        }
          
        </li>
        <li>
          {/*   <p>Bienvenido {user.email}</p> */}
            <button className="btn btn-danger" onClick={logout}>Logout</button>
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
        <p>{darkMode 
             ?
              'dark'
             : 'light'
             }</p>
             <button onClick={changeMode} >Change</button>
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

          <li>
            <p>Bienvenido {user.email}</p>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

library.add(faBars);

{
  /*  <li className='nav_item'>Habitaciones con Balcon</li>
                <li className='nav_item'>Habitaciones Panoramicas</li>
                <li className='nav_item'>Habitaciones Presidenciales</li> */
}


  {/*    <div className="dropdown">
            <ul>
              <li>
                Habitaciones
                <ul className="menu-vertical">
                  <li>
                    <Link href="#/action-1">Balcon</Link>
                  </li>
                  <li>
                    <Link href="#/action-2">Panoramica</Link>
                  </li>
                  <li>
                    <Link href="#/action-2">Presidencial</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div> */}

      {/*     <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Habitaciones
      </Dropdown.Toggle>
      <Dropdown.Menu>
         <Link href="#/action-1">Balcon</Link>
        <Link  href="#/action-2">Panoramica</Link>
        <Link  href="#/action-2">Presidencial</Link>
       <Dropdown.Item href="#/action-3">Presidencial</Dropdown.Item> 
      </Dropdown.Menu>
    </Dropdown>   */}