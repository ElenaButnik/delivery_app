import { createSelector } from '@reduxjs/toolkit';

const shopsState = state => state.shop;

export const getShopsSelector= createSelector(shopsState, shop => shop.shops);
export const getLoading = createSelector(shopsState, shop=>shop.loading)