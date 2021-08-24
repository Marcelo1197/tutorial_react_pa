import React from "react";
import { useSelector } from "react-redux";

export default function ContadorBarritas() {

  const contador = useSelector(state => state); //Obtengo el store que pase con el provider

  let estiloBarrita = {
    display: "block",
    width: `${contador}` + `0px`,
    height: `10px`,
    backgroundColor: "black",
    fontSize: "8px",
  }

  return (
    <div className="contador-barritas">
      <h1 style={estiloBarrita}> | </h1>
    </div>
  );
}