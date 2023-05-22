import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const { cart, totalCantidad } = useContext(CartContext)
    console.log('numerito', totalCantidad)

    return(
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
        <ShoppingCartIcon/>
        <span>{totalCantidad()}</span>
        </Link>
    )
}