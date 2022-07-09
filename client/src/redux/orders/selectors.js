import { createSelector } from '@reduxjs/toolkit';

const orderState = state => state.orders;

export const getOrders = createSelector(orderState, orders =>  orders.orders);
