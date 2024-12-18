import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saldo: 100,
};

const balanceSlice = createSlice({
  name: "saldo",
  initialState,
  reducers: {
    deposito: (state, action) => {
      state.saldo += action.payload;
    },
    levantamento: (state, action) => {
      if (state.saldo >= action.payload) {
        state.saldo -= action.payload;
      } else {
        alert("Saldo insuficiente!");
      }
    },
  },
});

export const { deposito, levantamento } = balanceSlice.actions;
export default balanceSlice.reducer;
