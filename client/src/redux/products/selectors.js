import { createSelector } from '@reduxjs/toolkit';

// const productsState = state => state.product;

// export const getProductsSelector= createSelector(productsState, product => product.products)
export const getProductsSelector = state => state.product.products;