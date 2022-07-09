import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostOrders, FetchGetOrders } from '../../services/API';


export const postThunkDataOrders = createAsyncThunk('postOrders', async (data, { rejectWithValue }) => {
  try {
    const response = await fetchPostOrders(data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});


export const getThunkDataOrders = createAsyncThunk('getOrders', async (params, { rejectWithValue }) => {
    try {
      const { data } = await FetchGetOrders(params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });
  

  export const getThunkDataOrdersItem = createAsyncThunk('getOrdersItem', async (orderId, { rejectWithValue }) => {
    try {
      const { data } = await FetchGetOrders(orderId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  });