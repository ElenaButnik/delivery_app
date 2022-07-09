import { createSelector } from '@reduxjs/toolkit';
const cartState = (state) => state.cart;

export const getTotalPrice = createSelector(cartState, cart => cart.totalPrice);

export const getOrder = createSelector(cartState, (state) => {
    const orderPieces = Object.entries(state.items).map(([key, val]) => {
      return {
        productId: key,
        count: val.items.length,
      };
    });
    return orderPieces;
  });