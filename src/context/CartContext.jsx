import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log('context cart',cart)
  
    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }
   
    /* se pregunta si el item se encuentra o no en el carrito */
    const isInCart = (id) => {
      return cart.some((item) => item.id === id) //retorna true o false si encuenta el id
    }

    /* variar carrito */
    const emptyCart = () => {
        setCart([])
    }

    /* Cantidad de intem para el carrito (numerito) */
    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0) //reducir el array  aun unico valor. 2 parametros uno acumulador y el otro es el elemento del array que estoy recorriendo 
     //por cada item que voy recorriendo en el acumulador se sume la cantidad y cero es el valor inicial
    }

    
    /* total de la compra */
    const totalCarrito = () => {
        return cart.reduce((acc, item) => acc + item.totalFinal, 0)
    }

    /* eliminar item de carrito */
    const removeItem = (id) => { //recibe el id de item para eliminar,es decir, devuelve solo los id diferenes al id que resibe la funcion
        setCart(  cart.filter((item) => item.id !== id))//filter retorna una porcion del array actual menos los item que se quiera elimminar 
    //Filter significa: dame el id de producto a eliminar y lo elimino
    }

       //verificar el stock real y que no se vaya a negativo
    const modifCantidad = (id) => {
        const _cart = cart.slice()
        const item = _cart.find(e => e.id == id) //se busca el producto a modificar
        item.cantidad++

        setCart(_cart)
    }

    return(
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            emptyCart,
            totalCantidad,
            totalCarrito,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}