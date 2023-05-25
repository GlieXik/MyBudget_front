import { statusFilters } from "../constants";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  status: statusFilters.all,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
