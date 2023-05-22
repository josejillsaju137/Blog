import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const DetailedCardModel = createSlice({
  name: "DetailedCardModel",
  initialState,
  reducers: {
    openCard: (state, action) => {
      return (state = true);
    },
    closeCard: (state, action) => {
      return (state = false);
    },
  },
});

export const { openCard, closeCard } = DetailedCardModel.actions;

export default DetailedCardModel.reducer;
