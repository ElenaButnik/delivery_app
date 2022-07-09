import { createSlice } from "@reduxjs/toolkit";
import { getShops } from "./thunks";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shops: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [getShops.pending]: (state) => {
      state.loading = true;
    },

    [getShops.fulfilled]: (state, action) => {
      state.shops = action.payload;
      state.loading = false;
    },

    [getShops.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default shopSlice.reducer;
