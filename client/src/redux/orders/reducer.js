import { createSlice } from '@reduxjs/toolkit';
import { getThunkDataOrders } from '../orders/thunks';
import { orderActions, orderItemActions } from './saga/constants';

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    data: '',
    status: 'idle',
  },

  extraReducers: builder => {
    builder
      .addCase(orderActions.start, state => {
        state.status = 'pending';
      })
      .addCase(orderActions.success, (state, action) => {
        state.status = 'idle';
        state.orders = action.payload;
      })
      .addCase(orderActions.error, state => {
        state.status = 'error';
      })

      .addCase(getThunkDataOrders.pending, state => {
        state.status = 'pending';
      })

      .addCase(getThunkDataOrders.fulfilled, (state, action) => {
        state.orders = action.payload.items;
        state.status = 'idle';
      })

      .addCase(getThunkDataOrders.rejected, (state, action) => {
        state.status = 'error';
      })

      .addCase(orderItemActions.start, state => {
        state.status = 'pending';
      })
      .addCase(orderItemActions.success, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(orderItemActions.error, state => {
        state.status = 'error';
      });
  },
});

export default orderSlice.reducer;
