import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const ItemCard = ( {itemData} ) => {
  return (
    
      <div className="card">

        <div className="card-image">
          <img className="img-fluid" src={itemData.img}></img>
        </div>

        <div className="card-body">
          <h3>{itemData.name}</h3>
          <p>{itemData.description}</p>
          {itemData.stock <= 50 ? <p style={{color: 'red'}}>Quedan pocas habitaciones!</p> : false}
          {/* otra manera hacerlo con && */}
{/*           {itemData.stock <= 50 ? <p style={{color: 'red'}}>Quedan pocas habitaciones!</p> : false}
 */}        </div>
        <div className="contNavCart">
       {/*  <a href="#"><ShoppingCartIcon/>{itemData.price}</a> */}
       <Link to={`/detail/${itemData.id}`} >Ver detalles</Link> 
        </div>
        
      </div>
    
  );
};

export default ItemCard;
