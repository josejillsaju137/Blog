import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const SelectedMovieDetailsReducers = createSlice({
  name: "SelectedMovieDetailsReducers",
  initialState,
  reducers: {
    selecteddata: (state, action) => {
      console.log("action.payload ----------", action.payload);
      return (state = action.payload);
    },
  },
});

export const { selecteddata } = SelectedMovieDetailsReducers.actions;

export default SelectedMovieDetailsReducers.reducer;
