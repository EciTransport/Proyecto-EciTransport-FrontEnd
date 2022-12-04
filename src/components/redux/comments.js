import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = "";

export const comments = createSlice({
  name: "comments",
  initialState: { value: initialStateValue },
  reducers: {
    getCommens: (state, action) => {
      state.value = action.payload;
    },
    setCommens: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { getCommens, setCommens } = comments.actions;

export default comments.reducer;