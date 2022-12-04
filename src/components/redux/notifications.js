import { createSlice } from "@reduxjs/toolkit";

export const initialStateValue = "";

export const notifications = createSlice({
  name: "notifications",
  initialState: { value: initialStateValue },
  reducers: {
    getNotifications: (state, action) => {
      state.value = action.payload;
    },
    setNotifications: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { getNotifications, setNotifications } = notifications.actions;

export default notifications.reducer;