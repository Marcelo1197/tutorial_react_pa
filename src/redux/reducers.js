const stateInicial = {}

export const reducerPedido = (estado = {}, accion) => {
  switch (accion.type) {
    case "ITEM_HACIENDO":
      console.log("Preparando item...");
      return {};
    case "ITEM_LISTO":
      console.log("Item listo!");
      return {};
    case "DELIVERY_ENCAMINO":
      console.log("Delivery en camino. Pedido listo.");
      return {};
    default:
      return estado;
  }
}