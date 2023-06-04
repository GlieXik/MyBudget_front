const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  startupPayments: [],
};

const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    setStartupPayments(state, action) {
      state.startupPayments = action.payload;
    },
    resetPayments(state) {
      state.startupPayments = [];
    },
  },
});

export const { setStartupPayments, resetPayments } = paymentsSlice.actions;
export const paymentsReducer = paymentsSlice.reducer;
