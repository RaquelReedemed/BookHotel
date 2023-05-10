import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const useErrorCount = () => {

  const [timer, setTimer] = useState(5);

  const navigate = useNavigate()
  console.log(navigate)

  useEffect(() => {
    
   setTimeout(() => {
     if(timer === 0 ) {
      navigate('/')
     }else{
      setTimer( timer - 1)
     }
   }, 1000);

  }, [timer]);
    
  return (
    {timer}
  )
}
