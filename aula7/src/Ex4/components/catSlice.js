import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Definir a ação assíncrona para buscar os dados da API
export const fetchCats = createAsyncThunk(
  "cats/fetchCats",
  async ({ page, limit }) => {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
      params: {
        page ,
        limit ,
        order: "asc",
        api_key: 'live_tVnKZdHlLRSC96yqECYJ3KDQpuqbMe1HNBarlF0BXCEizJWaBSdicQvcdoJ0vnBv',
      },
    });
    return response.data;
  }
);

// Slice
const catSlice = createSlice({
  name: "cats",

  // Estado inicial do slice
  initialState: {
    cats: [], // Array para armazenar os dados dos gatos
    status: "idle", // Status da requisição (idle, loading, succeeded, failed)
    error: null, // Armazena qualquer erro que ocorra durante a requisição
    page: 1, // Página atual para a paginação
    limit: 10,
    order: "asc",
    apiKey: process.env.REACT_APP_CAT_API_KEY,
  },

  // Redutores síncronos
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
  },

  // Redutores assíncronos
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cats = action.payload;
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { incrementPage, decrementPage } = catSlice.actions;

export default catSlice.reducer;