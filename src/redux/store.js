import { createStore } from "redux";

import { reducerItem } from "./reducers";

//DBG 
const REDUX_DEVTOOLS_ON = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const stateInicial = {
    itemsPedido: [],
}
export const store = createStore(reducerItem, REDUX_DEVTOOLS_ON);