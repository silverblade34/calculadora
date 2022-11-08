import './App.css';
import Logo from './img/logo-sapo.png'
import Boton from './component/Boton';
import Pantalla from './component/Pantalla';
import BtnClear from './component/BotonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const[input, setInput] = useState('');

  const esOperador=valor=>{
    return isNaN(valor) && (valor !== '.')&& (valor !== '=')
  };

  const agregarInput = val =>{
    let i= input.split('')[input.length - 1] // Nos ayuda a sacar el ultimo elemento de una cadena
    if(input==''){
      if(val=='*' || val=='/'){
        setInput(input)
      }else{
        setInput(input + val);
      }
    }else if(esOperador(i) && esOperador(val)==true){
      setInput(input);
    }else{
      setInput(input + val);
    }
  }

  const borrarInput= () =>{
    setInput('');
  }

  const calcularResultado=()=>{
    if(input){
      setInput(evaluate(input))
    }else{
      alert("Por favor ingrese valores para realizar los calculos");
    }
  }
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={Logo}
          className='logo'
          alt='Logo de sapito'
        />
      </div>
      <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BtnClear manejarClic={borrarInput}>Clear</BtnClear>
          </div>
      </div>
    </div>
  );
}

export default App;
