const MOCK_DATA = [
  {
    id: 1,
    name: "Habitacion con balcon-standar",
    description:
      "Disfrute de todas las comodidades en nuestras habitaciones económicas",
    price: 15000,
    category: "balcon",
    stock:20,
    img: "https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916253/BookHotel/rooms-balcony-room_gnuy1a.jpg",
    detailTitle1: "Servicios modernos",
    descDetail1:
      "Las comodidades y las habitaciones de Villa están diseñadas para ofrecer los mejores niveles posibles de comodidad y relajación. El diseño es contemporáneo basado en colores reconfortantes y logra atraer a muchos tipos de personalidades y gustos. Los materiales utilizados en la construcción de Villa son proporcionados por los mejores proveedores.",
    detailTitle2: "Electrodomésticos de marca",
    descDetail2:
      "Toda la electrónica es funcional y está diseñada para ofrecer los mejores niveles posibles de comodidad y relajación. El diseño es contemporáneo basado en colores reconfortantes y logra atraer a muchos tipos de personalidades y gustos. El enfoque principal de todos los electrodomésticos es ofrecer un gran tiempo de vacaciones mientras están en el interior.",
    detailTitle3: "Minibar lleno",
    descDetail3:
      "El minibar está repleto de golosinas y está diseñado para ofrecer los mejores niveles posibles de comodidad y relajación. El diseño es contemporáneo basado en colores reconfortantes y logra atraer. El enfoque principal del minibar es ofrecer un excelente tiempo de vacaciones mientras está en la habitación.",
    dates: ["2023-06-01", "2023-06-02", "2023-06-03"]  
  },
  {
    id: 2,
    name: "Habitacion con balcon-deluxe",
    description:
      "Ofrecemos habitaciones con acceso a todas las instalaciones del hotel",
    price: 20000,
    category: "balcon",
    stock:30,
    img: "https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916240/BookHotel/room-balcony-2_w9y62w.jpg",
    detailTitle1: "Servicios modernos",
    descDetail1:
      "Las comodidades y las habitaciones de Villa están diseñadas para ofrecer los mejores niveles posibles de comodidad y relajación. El diseño es contemporáneo basado en colores reconfortantes y logra atraer a muchos tipos de personalidades y gustos. Los materiales utilizados en la construcción de Villa son proporcionados por los mejores proveedores.",
    detailTitle2: "Electrodomésticos de marca",
    descDetail2:
      "Toda la electrónica es funcional y está diseñada para ofrecer los mejores niveles posibles de comodidad y relajación. El diseño es contemporáneo basado en colores reconfortantes y logra atraer a muchos tipos de personalidades y gustos. El enfoque principal de todos los electrodomésticos es ofrecer un gran tiempo de vacaciones mientras están en el interior.",
    detailTitle3: "Minibar lleno",
    descDetail3:
      "El minibar está repleto de golosinas y está diseñado para ofrecer los mejores niveles posibles de comodidad y relajación. El diseño es contemporáneo basado en colores reconfortantes y logra atraer. El enfoque principal del minibar es ofrecer un excelente tiempo de vacaciones mientras está en la habitación.",
  },
  {
    id: 3,
    name: "Habitacion con balcon-lujo",
    description:
      "Experimente la comodidad a un precio asequible en nuestra habitación de nivel alto",
    price: 30000,
    category: "balcon",
    stock:15,
    img: "https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916214/BookHotel/description-3_ceguq0.jpg",
    detailTitle1: "Servicios modernos",
    descDetail1:
      "Las comodidades y las habitaciones de Villa están diseñadas para ofrecer los mejores niveles posibles de comodidad y relajación. El diseño es contemporáneo basado en colores reconfortantes y logra atraer a muchos tipos de personalidades y gustos. Los materiales utilizados en la construcción de Villa son proporcionados por los mejores proveedores.",
    detailTitle2: "Electrodomésticos de marca",
    descDetail2:
      "Toda la electrónica es funcional y está diseñada para ofrecer los mejores niveles posibles de comodidad y relajación. El diseño es contemporáneo basado en colores reconfortantes y logra atraer a muchos tipos de personalidades y gustos. El enfoque principal de todos los electrodomésticos es ofrecer un gran tiempo de vacaciones mientras están en el interior.",
    detailTitle3: "Minibar lleno",
    descDetail3:
      "El minibar está repleto de golosinas y está diseñado para ofrecer los mejores niveles posibles de comodidad y relajación. El diseño es contemporáneo basado en colores reconfortantes y logra atraer. El enfoque principal del minibar es ofrecer un excelente tiempo de vacaciones mientras está en la habitación.",
      dates: ["2023-06-01", "2023-06-02", "2023-06-03"]  
  
  },
  {
    id: 4,
    name: "Habitacion Panoramica-standar",
    description:"Disfruta de la vista más espectacular al mar y los alrededores de la Villa.",
    price: 20000,
    category: "panoramica",
    stock:40,
    img: "https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916206/BookHotel/description-5_rrz554.jpg",
    detailTitle1: "Vistas panorámicas impresionantes",
    descDetail1: "Las habitaciones panorámicas de Villa ofrecen vistas espectaculares del entorno natural circundante. El diseño es moderno y minimalista, con grandes ventanales para disfrutar al máximo de las vistas. Las habitaciones están equipadas con muebles cómodos y elegantes para garantizar una estancia relajante.",
    detailTitle2: "Electrodomésticos de alta calidad",
    descDetail2: "Todos los electrodomésticos de las habitaciones panorámicas son de marcas reconocidas y garantizan la máxima comodidad y funcionalidad. El diseño es moderno y elegante, en perfecta armonía con el ambiente natural. Los huéspedes pueden disfrutar de una estancia cómoda y relajante con todas las comodidades que necesitan.",
    detailTitle3: "Bar con vistas panorámicas",
    descDetail3:"El bar en la habitación panorámica ofrece bebidas y snacks con una vista impresionante del paisaje natural. El diseño es minimalista y elegante, con materiales de alta calidad para garantizar la máxima comodidad y relajación. Los huéspedes pueden disfrutar de momentos inolvidables en la habitación, mientras disfrutan de las impresionantes vistas panorámicas.",
    dates: ["2023-06-01", "2023-06-02", "2023-06-03"]  
  },
  {
    id: 5,
    name: "Habitacion Panoramica-deluxe",
    description:"Contempla la belleza del mar y el entorno de la Villa desde la mejor perspectiva.",
    price: 20000,
    category: "panoramica",
    stock:60,
    img: "https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916245/BookHotel/room-panoramic-2_llly9n.jpg",
    detailTitle1: "Vistas panorámicas impresionantes",
    descDetail1:"Las habitaciones panorámicas de Villa ofrecen vistas espectaculares del entorno natural circundante. El diseño es moderno y minimalista, con grandes ventanales para disfrutar al máximo de las vistas. Las habitaciones están equipadas con muebles cómodos y elegantes para garantizar una estancia relajante.",
    detailTitle2: "Electrodomésticos de alta calidad",
    descDetail2:"Todos los electrodomésticos de las habitaciones panorámicas son de marcas reconocidas y garantizan la máxima comodidad y funcionalidad. El diseño es moderno y elegante, en perfecta armonía con el ambiente natural. Los huéspedes pueden disfrutar de una estancia cómoda y relajante con todas las comodidades que necesitan.",
    detailTitle3: "Bar con vistas panorámicas",
    descDetail3: "El bar en la habitación panorámica ofrece bebidas y snacks con una vista impresionante del paisaje natural. El diseño es minimalista y elegante, con materiales de alta calidad para garantizar la máxima comodidad y relajación. Los huéspedes pueden disfrutar de momentos inolvidables en la habitación, mientras disfrutan de las impresionantes vistas panorámicas.",
    dates: ["2023-06-01", "2023-06-02", "2023-06-03"]  
  },
  {
    id: 6,
    name: "Habitacion Panoramica-lujo",
    description: "Contempla la belleza del mar y el entorno de la Villa desde la mejor perspectiva.",
    price: 45000,
    category: "panoramica",
    stock:80,
    img: "https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916247/BookHotel/room-panoramic-3_hjrkcw.jpg",
    detailTitle1: "Vistas panorámicas impresionantes",
    descDetail1:"Las habitaciones panorámicas de Villa ofrecen vistas espectaculares del entorno natural circundante. El diseño es moderno y minimalista, con grandes ventanales para disfrutar al máximo de las vistas. Las habitaciones están equipadas con muebles cómodos y elegantes para garantizar una estancia relajante.",
    detailTitle2: "Electrodomésticos de alta calidad",
    descDetail2: "Todos los electrodomésticos de las habitaciones panorámicas son de marcas reconocidas y garantizan la máxima comodidad y funcionalidad. El diseño es moderno y elegante, en perfecta armonía con el ambiente natural. Los huéspedes pueden disfrutar de una estancia cómoda y relajante con todas las comodidades que necesitan.",
    detailTitle3: "Bar con vistas panorámicas",
    descDetail3: "El bar en la habitación panorámica ofrece bebidas y snacks con una vista impresionante del paisaje natural. El diseño es minimalista y elegante, con materiales de alta calidad para garantizar la máxima comodidad y relajación. Los huéspedes pueden disfrutar de momentos inolvidables en la habitación, mientras disfrutan de las impresionantes vistas panorámicas.",
    dates: ["2023-06-01", "2023-06-02", "2023-06-03"]  

  },
  {
    id: 7,
    name: "Habitacion Presidencial-standar",
    description: "Disfruta de la más alta calidad y lujo en tus vacaciones.",
    price: 65000,
    category: "presidencial",
    stock:75,
    img: "https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916251/BookHotel/room-presidential-3_dhmxyv.jpg",
    detailTitle1: "Ambiente de lujo",
    descDetail1: "La habitación Presidencial de Villa ofrece un ambiente de lujo y exclusividad para los huéspedes más exigentes. El diseño es elegante y refinado, con una cuidadosa selección de muebles y materiales de alta calidad para garantizar el máximo confort y relajación.",
    detailTitle2: "Equipamiento de alta gama",
    descDetail2: "La habitación Presidencial cuenta con equipamiento de alta gama de las mejores marcas, que garantiza la máxima comodidad y funcionalidad. El diseño es moderno y elegante, en armonía con el ambiente de lujo de la habitación. Los huéspedes pueden disfrutar de una estancia única y exclusiva con todas las comodidades necesarias.",
    detailTitle3: "Bar privado",
    descDetail3: "La habitación Presidencial cuenta con un bar privado para que los huéspedes disfruten de bebidas y snacks exclusivos sin tener que salir de la habitación. El diseño es sofisticado y elegante, con una selección de bebidas y snacks cuidadosamente elegida para satisfacer los gustos más exigentes. Los huéspedes pueden disfrutar de momentos inolvidables en la habitación más exclusiva de Villa.",
    dates: ["2023-06-01", "2023-06-02", "2023-06-03"]  

  },
  {
    id: 8,
    name: "Habitacion Presidencial-deluxe",
    description: "Disfruta de la más lujo calidad y lujo en tus vacaciones.",
    price: 80000,
    category: "presidencial",
    stock:85,
    img: "https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916251/BookHotel/room-presidential-2_fanobn.jpg",
    detailTitle1: "Ambiente de lujo",
    descDetail1:"La habitación Presidencial de Villa ofrece un ambiente de lujo y exclusividad para los huéspedes más exigentes. El diseño es elegante y refinado, con una cuidadosa selección de muebles y materiales de alta calidad para garantizar el máximo confort y relajación.",
    detailTitle2: "Equipamiento de alta gama",
    descDetail2: "La habitación Presidencial cuenta con equipamiento de alta gama de las mejores marcas, que garantiza la máxima comodidad y funcionalidad. El diseño es moderno y elegante, en armonía con el ambiente de lujo de la habitación. Los huéspedes pueden disfrutar de una estancia única y exclusiva con todas las comodidades necesarias.",
    detailTitle3: "Bar privado",
    descDetail3: "La habitación Presidencial cuenta con un bar privado para que los huéspedes disfruten de bebidas y snacks exclusivos sin tener que salir de la habitación. El diseño es sofisticado y elegante, con una selección de bebidas y snacks cuidadosamente elegida para satisfacer los gustos más exigentes. Los huéspedes pueden disfrutar de momentos inolvidables en la habitación más exclusiva de Villa.",
    dates: ["2023-06-01", "2023-06-02", "2023-06-03"]  

  },
  {
    id: 9,
    name: "Habitacion Presidencial-lujo",
    description: "Disfruta de la más lujo calidad y lujo en tus vacaciones.",
    price: 80000,
    category: "presidencial",
    stock:35,
    img: "https://res.cloudinary.com/da5fzpyjp/image/upload/v1681916248/BookHotel/room-presidential-1_bshs6s.jpg",
    detailTitle1: "Ambiente de lujo",
    descDetail1: "La habitación Presidencial de Villa ofrece un ambiente de lujo y exclusividad para los huéspedes más exigentes. El diseño es elegante y refinado, con una cuidadosa selección de muebles y materiales de alta calidad para garantizar el máximo confort y relajación.",
    detailTitle2: "Equipamiento de alta gama",
    descDetail2: "La habitación Presidencial cuenta con equipamiento de alta gama de las mejores marcas, que garantiza la máxima comodidad y funcionalidad. El diseño es moderno y elegante, en armonía con el ambiente de lujo de la habitación. Los huéspedes pueden disfrutar de una estancia única y exclusiva con todas las comodidades necesarias.",
    detailTitle3: "Bar privado",
    descDetail3: "La habitación Presidencial cuenta con un bar privado para que los huéspedes disfruten de bebidas y snacks exclusivos sin tener que salir de la habitación. El diseño es sofisticado y elegante, con una selección de bebidas y snacks cuidadosamente elegida para satisfacer los gustos más exigentes. Los huéspedes pueden disfrutar de momentos inolvidables en la habitación más exclusiva de Villa.",
    dates: ["2023-06-01", "2023-06-02", "2023-06-03"]  

  },
];

export default MOCK_DATA;
