const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  startupPayments: [],
};

const paymentsSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStartupPayments(state, action) {
      state.startupPayments = action.payload;
    },
  },
});

export const { setStartupPayments } = paymentsSlice.actions;
export const paymentsReducer = paymentsSlice.reducer;
