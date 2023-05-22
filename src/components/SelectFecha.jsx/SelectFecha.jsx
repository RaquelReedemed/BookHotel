
import { useEffect } from "react";

const SelectFecha = ({ setFecha, options }) => {

  const handleSelect = (e) => {
    setFecha(e.target.value);
  };

  useEffect(() => {
    setFecha(options[0].value)
  }, []);

  return (
    <div className="cont-btn-fecha">
        <select onChange={handleSelect}>
          {/* onChange, captura los cambios */}
          {
            options.map((opt) => (
                <option value={opt.value} key={opt.value}>{opt.label}</option>
            ))
          }
        </select>
    </div>
  );
};

export default SelectFecha;
