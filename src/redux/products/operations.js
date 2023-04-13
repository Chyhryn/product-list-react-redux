import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://639c85ff16d1763ab14c8873.mockapi.io/api/v1";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/products");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "We have some technical issues. Please try later!"
      );
    }
  }
);
