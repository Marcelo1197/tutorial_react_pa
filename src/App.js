import React from "react";

import { Provider } from 'react-redux'
import { useDispatch } from 'react-redux'

import {incrementar, decrementar, resetear } from "./redux/actions";

import ContadorBarritas from "./components/ContadorBarrita";
import ContadorNumeros from "./components/ContadorNumeros";

import "./App.css"

export default function App() {

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Aprendemos Redux!</h1>
      <ContadorNumeros />
      <ContadorBarritas />

      <button className="boton-incDec" onClick={() => dispatch(incrementar())}> + </button> 
      <button className="boton-incDec" onClick={() => dispatch(decrementar())}> - </button>
      <button className="boton-reset" onClick={() => dispatch(resetear())}> RESET </button>
    </div>
  );
}