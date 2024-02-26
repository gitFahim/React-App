import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action.payload);
    case 'REMOVE_FROM_CART':
      return removeFromCart(state, action.payload);
    case 'INCREASE_QUANTITY':
      return increaseQuantity(state, action.payload);
    case 'DECREASE_QUANTITY':
      return decreaseQuantity(state, action.payload);
    default:
      return state;
  }
};

const addToCart = (state, item) => {
  const existingItemIndex = state.findIndex((i) => i.id === item.id);

  if (existingItemIndex !== -1) {
    const newState = [...state];
    newState[existingItemIndex].quantity++;
    return newState;
  }

  return [...state, { ...item, quantity: 1 }];
};

const removeFromCart = (state, item) => {
  return state.filter((i) => i.id !== item.id);
};

const increaseQuantity = (state, item) => {
  const existingItemIndex = state.findIndex((i) => i.id === item.id);

  if (existingItemIndex !== -1) {
    const newState = [...state];
    newState[existingItemIndex].quantity++;
    return newState;
  }

  return state;
};

const decreaseQuantity = (state, item) => {
  const existingItemIndex = state.findIndex((i) => i.id === item.id);

  if (existingItemIndex !== -1) {
    const newState = [...state];
    if (newState[existingItemIndex].quantity > 1) {
      newState[existingItemIndex].quantity--;
    }
    return newState;
  }

  return state;
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
