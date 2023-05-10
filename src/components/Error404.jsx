

import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const  Error404 = () => {

    const [timer, setTimer] = useState(5);

    const navigate = useNavigate()
    console.log(navigate)


    useEffect(() => {
        const timeout = setTimeout(() => {
          if (timer === 0) {
            navigate('/')
          } else {
            setTimer(timer - 1)
          }
        }, 1000)
    
        return () => clearTimeout(timeout)
      }, [timer, navigate])


  return (
    <div className='container my-5'>
       <h2>No se encontro la pagina solicitada</h2>
       <hr/>

       <h4>Sera redireccionada en {timer} segundos...</h4>
    </div>
  )
}

export default Error404

 /*   console.log(window.location) */

    /* useEffect(() => {
        setTimeout(() => { */
        /*  window.location.replace("/") */ /* replace sirve para modificar */
       /*  navigate(-1) */ /* a diferencia del window no recarga la pagina */
       /*  },5000)     
    }, []); */