
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faWifi, faShower, faTv, faWind, faSnowflake, faWaterLadder } from '@fortawesome/free-solid-svg-icons';
import { Description } from '@mui/icons-material';
import { useState, useEffect } from 'react';


const MOCK_DATA = [
        {
          id:1,
          name:'Habitacion con balcon-economica',
          description: 'Our entry level room gives you access to all amenities at a really affordable price',
          price: 15000,
          img: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916253/BookHotel/rooms-balcony-room_gnuy1a.jpg'
        },
        {
          id:2,
          name:'Habitacion con balcon-media',
          description: 'Our entry level room gives you access to all amenities at a really affordable price',
          price: 20000,
          img: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916240/BookHotel/room-balcony-2_w9y62w.jpg'
        },
        {
          id:3,
          name:'Habitacion con balcon-alta',
          description: 'Our entry level room gives you access to all amenities at a really affordable price',
          price: 30000,
          img: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916214/BookHotel/description-3_ceguq0.jpg'
        },
        {
          id:4,
          name:'Habitacion Panoramica-economica',
          description: 'Get the best view to the beautiful sea and the truly splendid Villa surroundings',
          price: 20000,
          img: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916206/BookHotel/description-5_rrz554.jpg'
        },
        {
          id:5,
          name:'Habitacion Panoramica-media',
          description: 'Get the best view to the beautiful sea and the truly splendid Villa surroundings',
          price: 20000,
          img: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916245/BookHotel/room-panoramic-2_llly9n.jpg'
        },
        {
          id:6,
          name:'Habitacion Panoramica-alta',
          description: 'Get the best view to the beautiful sea and the truly splendid Villa surroundings',
          price: 45000,
          img: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916247/BookHotel/room-panoramic-3_hjrkcw.jpg'
        },
        {
          id:7,
          name:'Habitacion Presidencial-economica',
          description: 'Get the best view to the beautiful sea and the truly splendid Villa surroundings',
          price: 65000,
          img: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916251/BookHotel/room-presidential-3_dhmxyv.jpg'
        },
        {
          id:8,
          name:'Habitacion Presidencial-media',
          description: 'Get the best view to the beautiful sea and the truly splendid Villa surroundings',
          price: 80000,
          img: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916251/BookHotel/room-presidential-2_fanobn.jpg'
        },
        {
          id:9,
          name:'Habitacion Presidencial-alta',
          description: 'Get the best view to the beautiful sea and the truly splendid Villa surroundings',
          price: 80000,
          img: 'https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916248/BookHotel/room-presidential-1_bshs6s.jpg'
        }     
]

const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA)
    }, 3000)
  })
}

export const ItemListContainer = () => {

  const [productos, setProductos] = useState('hola');
  console.log(productos)

  useEffect(() => {
    pedirDatos()
     .then((res) => {
      setProductos(res)
  
     })
     .catch((error) => {
      console.log(error)
     })
  }, []);

   


  return (

    <div className='lista'>

    <div className="container">

      <div className="encabezadoItem">
        <h2>Comfort y relajacion</h2>
        <ul>

          <li className="address">
            Villa ofrece habitaciones de comfort y relajacion. Todas ellas
            incluyen:
          </li>

          <li className='li-iconos'>
           <div><FontAwesomeIcon icon={faWifi} /> Free Wi-Fi</div>
           <div><FontAwesomeIcon icon={faShower} /> Baño privado</div>
           <div><FontAwesomeIcon icon={faSnowflake} /> Heladera</div>
            
          </li>
          <li className='li-iconos'>
           <div><FontAwesomeIcon icon={faTv}/> Televisor</div> 
           <div><FontAwesomeIcon icon={faWind} /> Aire Acondicionado</div>
           <div><FontAwesomeIcon icon={faWaterLadder} /> Piscina</div>
          </li>
        </ul>
      </div> {/* fin encabezadoItem */}
    
      </div>

      <div className='grid-container'>

      <div className='card'>
        <div className='card-image'>
        <img className='img-fluid' src='https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916214/BookHotel/description-2_crsa38.jpg'></img>
        </div>
        <div className='card-body'>
          <h3>Habitacion con balcon</h3>
          <p>Our entry level room gives you access to all amenities at a really affordable price</p>
          <button>$15.000</button>
        </div>
      </div>

      <div className='card'>
        <div className='card-image'>
        <img className='img-fluid' src='https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916214/BookHotel/description-2_crsa38.jpg'></img>
        </div>
        <div className='card-body'>
          <h3>Habitacion con balcon</h3>
          <p>Our entry level room gives you access to all amenities at a really affordable price</p>
          <button>$15.000</button>
        </div>
      </div>

      <div className='card'>
        <div className='card-image'>
        <img className='img-fluid' src='https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916214/BookHotel/description-2_crsa38.jpg'></img>
        </div>
        <div className='card-body'>
          <h3>Habitacion con balcon</h3>
          <p>Our entry level room gives you access to all amenities at a really affordable price</p>
          <button>$15.000</button>
        </div>
      </div>

      

      </div> {/* fin grid-container */}
    </div>
  );
};

library.add(faHouse, faWifi, faShower, faTv, faWind, faSnowflake, faWaterLadder)
