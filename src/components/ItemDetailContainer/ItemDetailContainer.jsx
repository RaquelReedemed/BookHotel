
import React from 'react'
import { useEffect, useState } from 'react'
import { pedirDatos } from "../../helpers/pedirDatos.js"
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList.jsx'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import LoaderDisenio from '../Loader/LoaderDisenio.jsx'
import Loader from '../Loader/Loader.jsx'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        pedirDatos() /* .find(), para retornar el elemento que coincide con la busqueda */
           .then((data) => setItem(data.find((el) => el.id === Number(itemId))))
           .catch(err => console.log(err))
           .finally(() => setLoading(false))
    }, []);

  return  (
    <div className='container my-5'>
         {
            loading
              ? <Loader cargando={LoaderDisenio}/>
              : <ItemDetail itemData={item}/>
        } 
    </div>
  )
}

export default ItemDetailContainer