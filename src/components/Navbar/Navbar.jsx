import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartWidget } from "../CartWidget/CartWidget";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

  const [active, setActive] = useState('nav_collapse');

  const navHamb = () => {
    active === 'nav_collapse'
    ? setActive('nav_collapse navActive')
    : setActive('nav_collapse')
  }

  return (
    <nav className="nav">
    
      <ul className="nav_ul">
      <li className="nav_logo"> <img src={logo} alt="logo"></img></li>

        <li className="nav_item">Articulo</li>
        <li>
     <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Habitaciones
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Balcon</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Panoramica</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Presidencial</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>   
        </li>
      </ul>

      <ul className="nav_ul">
        <li className="nav_item">Contactanos</li>
        <li className="cart"><CartWidget/></li>
        <li className="icon_toggle">
          <a className="icon_toggle-mobile"><FontAwesomeIcon icon={faBars}/></a> 
        </li>
      </ul>

      {/* version mobile */}

      <div className="nav_mobile">  {/* ocultar en desktop */}
      <li className="nav_logo-mobile"> <img src={logo} alt="logo"></img></li>
      <div className="cont_icons-mobile">
      <li className="cart-mobile"><CartWidget/></li>
      <li onClick={navHamb}  className="icon_toggle-mobile"><a><FontAwesomeIcon icon={faBars}/></a></li>
      </div>
      </div>

       <div className={active}> {/*className="nav_collapse"  */}
        <ul>
        <li className='nav_items'><a href="#" className="nav-link">Habitaciones con Balcon</a></li>
        <li className='nav_items'><a href="#" className="nav-link">Habitaciones Panoramicas</a></li>
        <li className='nav_items'><a href="#" className="nav-link">Habitaciones Presidenciales</a></li>
        <li className='nav_items'><a href="#" className="nav-link">Contactanos</a></li>
        </ul>

      </div> 

      <div className="nav_toggle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
     
    </nav>
  );
};

library.add(faBars)

        {/*  <li className='nav_item'>Habitaciones con Balcon</li>
                <li className='nav_item'>Habitaciones Panoramicas</li>
                <li className='nav_item'>Habitaciones Presidenciales</li> */}