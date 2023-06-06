
import React from 'react'
import { useEffect, useState } from 'react'
/* import { pedirDatos } from "../../helpers/pedirDatos.js" */
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.jsx'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import LoaderDisenio from '../Loader/LoaderDisenio.jsx'
import LoaderDisenio3 from '../Loader/LoaderDisenio3.jsx'
import Loader from '../Loader/Loader.jsx'
import { doc, getDoc } from 'firebase/firestore' /* para armar la ref a un documento, "getDoc" en singular es para traer 1 solo documento */
import { db } from '../../firebase/config.js'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true) 

        // 1- armo la referencia (sync)
      const docRef = doc(db, "habitaciones", itemId) /* itemId, seria el id del documento que necesito de esa coleccion */

        //2-llamo la ref (async)
      getDoc(docRef)
         .then((doc) => {
          const _item = {
            id: doc.id,
            ...doc.data()
          }
           console.log('id',doc.id)
           console.log('data',doc.data())

           setItem(_item)
         })
         .catch(e => console.log(e))
         .finally(() => setLoading(false))

        /* .find(), para retornar el elemento que coincide con la busqueda */
        /* pedirDatos() 
           .then((data) => setItem(data.find((el) => el.id === Number(itemId))))
           .catch(err => console.log(err))
           .finally(() => setLoading(false)) */
    }, []);

  return  (
    <div>
         {
            loading
              ? <Loader cargando={LoaderDisenio3}/>
              : <ItemDetail itemData={item}/>
        } 
    </div>
  )
}

export default ItemDetailContainer