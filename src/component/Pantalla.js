import React from "react";
import '../css/Pantalla.css';


//En los componentes se usa parentesis cuando vamos a retonar directamente
// se usa cuando haces algo sencillo sin funciones.
const Pantalla = ({input})=>(
  <div className="input">
        {input}
  </div>
);

export default Pantalla;
