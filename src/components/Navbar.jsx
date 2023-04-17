import logo from "../../src/assets/logo.svg";
import { Dropdown } from "react-bootstrap";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export const Navbar = () => {
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
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
         
        </li>
        {/*  <li className='nav_item'>Habitaciones con Balcon</li>
                <li className='nav_item'>Habitaciones Panoramicas</li>
                <li className='nav_item'>Habitaciones Presidenciales</li> */}
      </ul>

      <ul className="nav_ul">
        <li className="nav_item">Contactanos</li>
        <li>
        
        <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
      
   

        </li>
      </ul>
     
    </nav>
  );
};
