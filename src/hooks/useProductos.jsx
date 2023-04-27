import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";

export const useProductos = () => {
     
    const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true);
  console.log(productos);

     useEffect(() => {
      setloading(true)

    pedirDatos()
     .then((res) => {
      setProductos(res)
      setloading(false)
     })
     .catch((error) => {
      console.log(error)
      setloading(false)
     })
  }, []); 

    return ({
        productos,
        loading
    })
} 