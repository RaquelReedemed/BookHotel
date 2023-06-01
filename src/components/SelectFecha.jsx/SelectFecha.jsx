
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO, format } from "date-fns";
import { differenceInDays } from "date-fns";

const SelectFecha = ({options, price, setTotalPrice, totalPrice, startDate, setStartDate, endDate, setEndDate, transformedStock}) => {

  const dates = options.fechasDisponibles
  console.log('fechasDisponibles', dates)

  const stockPorDia = options.stockPorDia
  console.log('stock por dia', stockPorDia)
  

   
  /*  const [startDate, setStartDate] = useState(null);
   console.log('startDate',startDate)
   const [endDate, setEndDate] = useState(null);
   console.log('endDate',endDate) */


   const minDate = new Date(Math.min(...dates.map(date => parseISO(date)))) ;
  const maxDate = new Date(Math.max(...dates.map(date => parseISO(date))));

  const formattedDateMin = format(minDate, 'dd MMM yyyy');
  console.log('formatedateMIN', formattedDateMin)
  const formattedDateMax = format(maxDate, 'dd MMM yyyy');
  console.log('formatedateMAX', formattedDateMax)
  
   console.log('minDate', minDate)
   console.log('maxDate', maxDate)
  
  
   const onChangeDateHandler = (value) => {
    console.log(value)
         setStartDate(value[0])
         setEndDate(value[1])
   }

   useEffect(() => {
    if(startDate && endDate) {
      const days = differenceInDays(endDate, startDate) + 1;
      const totalPrice = price * days;
      setTotalPrice(totalPrice);
    } 
   }, [startDate, endDate, price]);

  return (
    <div className="contSeleccionador">

      <h4>Seleccione fechas</h4>

    <ReactDatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={onChangeDateHandler}
      dateFormat="dd MMM yyyy"
      minDate={minDate}
      maxDate={maxDate}
    />

{/* {startDate && endDate && (
  <p>
    Precio Total: {totalPrice} ({differenceInDays(endDate, startDate) + 1} días)
  </p>
)} */}

   {/*  {
    startDate && endDate && (
      <p>
        Stock por dia:
         {Object.keys(transformedStock).map(date => (
          <span key={date}>{date}: {transformedStock[date]}</span>
         ))}
      </p>
    )
   } */} 
    
    </div>
  );
}

export default SelectFecha;



/* const SelectFecha = ({ setFecha, options }) => {

  const handleSelect = (e) => {
    setFecha(e.target.value);
  };

  useEffect(() => {
    setFecha(options[0].value)
  }, []);

  return (
    <div className="cont-btn-fecha">
        <select onChange={handleSelect}>
          onChange, captura los cambios 
          {
            options.map((opt) => (
                <option value={opt.value} key={opt.value}>{opt.label}</option>
            ))
          }
        </select>
    </div>
  );
};

export default SelectFecha; */
