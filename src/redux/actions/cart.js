export const addPizza = (item) => ({
  type: 'ADD_PIZZA',
  payload: item
});

export const removePizza = (id) => ({
  type: 'REMOVE_PIZZA',
  payload: id
});

export const clearCart = () => ({
  type: 'CLEAR_CART'
});

export const plusPizza = (id) => ({
  type: 'PLUS_PIZZA',
  payload: id
});

export const minusPizza = (id) => ({
  type: 'MINUS_PIZZA',
  payload: id
});
