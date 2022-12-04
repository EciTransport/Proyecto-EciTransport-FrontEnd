import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const initialStateValue = "";

export const reports = createSlice({
  name: "reports",
  initialState: { value: initialStateValue },
  reducers: {
    getDataReports: (state, action) => {
      state.value = action.payload;
    },
    setDataReports: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { getDataReports, setDataReports, updateDataReports } = reports.actions;

export default reports.reducer;