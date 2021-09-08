export const seleccionarItem = (itemId) => {
  return {
    type: "ITEM_SELECCIONADO",
    payload: {
      itemId,
    }
  }
}


export const pedirDelivery = (pedidoId) => {
  console.log(`PEDIDO ${pedidoId} LISTO. DELIVERY EN CAMINO.`);
  
  return {
    type: "DELIVERY_ENCAMINO",
    payload: {
      pedidoId,
    }
  }
}