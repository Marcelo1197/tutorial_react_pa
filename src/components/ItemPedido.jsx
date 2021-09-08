import React from "react";

import { Provider } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import {seleccionarItem} from "../redux/actions";

export default function ItemPedido({id, nombre, estado}) {

    let estiloItem = {
        backgroundColor: "#C8C6C6",
        width: "200px",
        height: "50px",
        marginTop: "20px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
    }

    const dispatch = useDispatch();

    return <div style={estiloItem} onClick={() => dispatch(seleccionarItem(id))}>
        <h3>{nombre}</h3>
        <h3>{estado ? " Haciendo..." : ""}</h3>
    </div>
}