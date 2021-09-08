import React from "react";
import { useDispatch, useSelector } from "react-redux";

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

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    let itemsNoListos = 0; 
    state.itemsPedido.forEach(item => item.status ? itemsNoListos += 0 : itemsNoListos++); //Si el estado del item es true (haciendose) sumo 1 al contador de item no listos.

    return <div style={estiloPedido}>
        <h2>Pedido {id}</h2>

        {itemsNoListos == 0 ? <h2 style={{backgroundColor: "green", display: "inline"}}>LISTO</h2> : "" /*Si hay 0 items no-listos el pedido está LISTO */}
        
        {state.itemsPedido.map(item => {
                return <i key={item.id}><ItemPedido id={item.id} estado={item.status} nombre={item.nombre}/></i>
            })
        }
        
        <button disabled={itemsNoListos == 0 ? false : true} onClick={() => dispatch(pedirDelivery(id))}> Delivery</button>
    </div>
}