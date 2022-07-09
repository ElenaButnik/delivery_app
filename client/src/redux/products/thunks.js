
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchGetProduct } from "../../services/API";


export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await FetchGetProduct();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


