import React from "react";
import '../css/Btn-clear.css';

const BotonClear = (props) =>(
  <div className="btn-clear"
  onClick={()=>props.manejarClic()}>
    {props.children}
  </div>
);

 export default BotonClear