import React from "react";

import Pedido from "./components/Pedido.jsx";

import "./App.css"

export default function App() {

  return (
    <div className="main">
      <h1>Manejador de Pedidos!</h1>
      <ul>
        <li><Pedido id="#144"/></li>
        <li><Pedido id="#232"/></li>
        <li><Pedido id="#432"/></li>
      </ul>
    </div>
  );
}