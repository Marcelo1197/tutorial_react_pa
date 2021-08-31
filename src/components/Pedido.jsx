import React from "react";
import { useDispatch } from "react-redux";

import {pedirDelivery} from "../redux/actions";

import ItemPedido from "./ItemPedido";

export default function Pedido({id}) {

    let estiloPedido = {
        backgroundColor: "#4B6587",
        width: "270px",
        height: "400px",
        paddingTop: "15px",
        marginLeft: "15px",
        padding: "10px",
    }

    const dispatch = useDispatch();

    return <div style={estiloPedido}>
        <h2>Pedido {id}</h2>
        <ItemPedido />
        <ItemPedido />
        <ItemPedido />
        <button onClick={() => dispatch(pedirDelivery())}> Delivery</button>
    </div>
}