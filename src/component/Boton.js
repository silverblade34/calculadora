import React from "react";
import '../css/Boton.css';

function Boton(props){
    const esOperador=valor=>{
        return isNaN(valor) && (valor != '.')&& (valor != '=')
    };
   return(
     <div
     //Esta es una clase especial usando -`-
     className={`boton-contenedor ${esOperador(props.children)?'operador':''}`.trimEnd()}
     //Definimos una funcion nueva que retorna el resultado de llamar una funcion
     onClick={()=>props.manejarClic(props.children)}> 
        {props.children}
     </div>
   )
}

export default Boton;