import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";

import { CartWidget } from "../CartWidget/CartWidget";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [active, setActive] = useState("nav_collapse");
  console.log(active);

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
          <Link to="/habitaciones">Habitaciones</Link>
        </li>
         <li className="nav_item">
          <Link to="/balcon">Balcon</Link>
        </li> 
        <li className="nav_item">
          <Link to="/panoramicas">Panoramica</Link>
        </li>
        <li className="nav_item">
          {" "}
          <Link to="/presidenciales">Presidencial</Link>
        </li>
      </ul>

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

      <ul className="nav_ul">
        <li className="nav_item">Contactanos</li>
        <li className="cart">
          <CartWidget />
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
        <li className="nav_logo-mobile">
          <img src={logo} alt="logo"></img>
          <p>Inicio</p>
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
          <li>
            <a href="#" className="nav-link">
              Habitaciones con Balcon
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Habitaciones Panoramicas
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Habitaciones Presidenciales
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contactanos
            </a>
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
