
const stateInicial = { //stateInicial representa el estado de UN PEDIDO.
  id: null,
  status: "NO_HECHO",
  itemsPedido: [
    {
      id: 111,
      status: false, //false == item no haciendose, true == item haciendose
      nombre: "bife",
    },
    {
      id: 222,
      status: false,
      nombre: "pure",
    },
    {
      id: 333,
      status: false,
      nombre: "ensalada",
    },
  ],
}

const actualizarItem = (idItem, listaItems) => listaItems.map((item) => { //función auxiliar para reducerItem
  if (item.id == idItem)
    return {...item, status: !item.status,};
  else
    return item;
});

export const reducerItem = (estado = stateInicial, accion) => {
  switch (accion.type) {
    case "ITEM_SELECCIONADO":
      console.log(estado);
      return {
        ...estado,
        itemsPedido: actualizarItem(accion.payload.itemId, estado.itemsPedido), //en action.payload tengo el ID del item que debo actualizar su status
      };
    default:
      return estado;
  }
}

export const reducerPedirDelivery = (estado = stateInicial, accion) => { //TODO: falta modificar stateInicial para usar reducerPedirDelivery. 
  switch (accion.type) {
    case "DELIVERY_ENCAMINO": //TODO: modificar el estado del pedido específico usando el id.
      return estado;
    default:
      return estado;
  }
}