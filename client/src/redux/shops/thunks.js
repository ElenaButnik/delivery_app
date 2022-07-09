
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchGetShops } from "../../services/API";

export const getShops = createAsyncThunk(
  "shops/getShops",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await FetchGetShops();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);