import React, { useContext, useEffect } from "react"
import { Slider } from "./Slider/Slider"
import { ItemListContainer } from "./ItemListContainer/ItemListContainer"


export const Inicio = () => {

  
    return(
        <div>
            
            <Slider></Slider>
            <ItemListContainer></ItemListContainer> 

        </div>
    )
}