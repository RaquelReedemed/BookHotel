import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemCard = ( {itemData} ) => {
  return (
    
      <div className="card">

        <div className="card-image">
          <img className="img-fluid" src={itemData.img}></img>
        </div>

        <div className="card-body">
          <h3>{itemData.name}</h3>
          <p>{itemData.description}</p>
         
        </div>
        <div className="contNavCart">
       {/*  <a href="#"><ShoppingCartIcon/>{itemData.price}</a> */}
       <button>Ver detalles</button> 
        </div>
        
      </div>
    
  );
};

export default ItemCard;
