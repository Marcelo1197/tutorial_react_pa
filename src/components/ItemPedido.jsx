import React from "react";

import { Provider } from 'react-redux'
import { useDispatch } from 'react-redux'

import {hacerItem, terminarItem} from "../redux/actions";

export default function ItemPedido() {

    let estiloItem = {
        backgroundColor: "#C8C6C6",
        width: "200px",
        height: "50px",
        marginTop: "20px",
        cursor: "pointer",
    }

    const dispatch = useDispatch();

    return <div style={estiloItem} onClick={() => dispatch(hacerItem())}>
        <h3>ItemPedido</h3>
    </div>
}