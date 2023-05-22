

const ItemCount = ({stock, cantidad, setCantidad, agregar }) => {

    /* const [cantidad, setCantidad] = useState(1);
    console.log(cantidad) */

    const handlerestar = () => {
       cantidad > 1 &&  setCantidad(cantidad - 1)  /* se agrega &&, ya que si detecta que la cantidad es menor 1 no se evalue la resta */
    }

    const handleSumar = () => {
       cantidad < stock && setCantidad(cantidad + 1)  /* se coloca dentro de parentesis para que la suma se evalue primero y luego se asigne a SetCantidad() para que se actualice el estado */
    }

   
    
    return (
        <div className="cont-btn-reserva">
          <button 
          onClick={handlerestar}
          className={`btn mx-1 ${cantidad === 1 ? "btn btn-outline-danger" : "btn btn-outline-primary"}`}
          disabled={cantidad === 1}>
           -
           </button>
          <span className="mx-2">{cantidad}</span>
          <button
           onClick={handleSumar}
           className={cantidad === stock ? "btn btn-danger" : "btn btn-primary"}
           disabled={cantidad === stock}>
           +
           </button>
          <br/>
           <button 
           onClick={agregar} 
           className="btn btn-success">
           Reservar
           </button>    
        </div>
    );
}

export default ItemCount;
