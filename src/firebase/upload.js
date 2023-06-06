import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json' } //assert se agrega para que pueda ser leido por firebase e importe el modulo
import { db } from './config' //para pasar las colecciones
import { collection, addDoc } from 'firebase/firestore'//para referenciar la coleccion y addDoc para subir la coleccion


//removiendo la propiedad "id" de cada uno de los elementos

MOCK_DATA.forEach((el) => delete el.id)

console.log(MOCK_DATA)

//creando coleccion para la base de datos

const habitacionesRef = collection(db, "habitaciones")

MOCK_DATA.forEach((el) => {
    addDoc(habitacionesRef, el)//agrega cada elemento de Mock_Data como un nuevo documento a la db "habitaciones"
})

