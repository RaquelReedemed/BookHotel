import { Link } from "react-router-dom";

const TerminarPago = () => {
    return (
        <div>

<div class="card"> 
  <button class="dismiss" type="button">×</button> 
  <div class="header"> 
    <div class="image">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div> 
      <div class="content">
         <span class="title">Orden reservada</span> 
{/*          <p class="message">Thank you for your purchase. you package will be delivered within 2 days of your purchase</p> 
 */}         </div> 
         <div class="actions">
            <Link to="/cart" class="history" type="button">Terminar mi pago</Link> 
            {/* <Link className="btn btn-success" to="/cart">Terminar mi pago</Link> */}
{/*             <button class="track" type="button">Track my package</button> 
 */}            </div> 
            </div> 
            </div>

            
        </div>
    );
}

export default TerminarPago;
