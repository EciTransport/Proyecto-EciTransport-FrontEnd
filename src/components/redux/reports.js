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
    updateDataReports(state, action) {
      const {idReport, newComment} = action.payload;
      const report = state.find(report => report.idString == idReport);
      if (report) {
        report.comments.push(newComment);
      }else {
        console.log("No se encontro el Reporte");
      }
    }
  },
});

export const { getDataReports, setDataReports, updateDataReports } = reports.actions;

export default reports.reducer;