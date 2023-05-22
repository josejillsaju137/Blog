import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const AddDataModal = createSlice({
  name: "AddDataModal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      return (state = true);
    },
    closeModal: (state, action) => {
      return (state = false);
    },
  },
});

export const { openModal, closeModal } = AddDataModal.actions;

export default AddDataModal.reducer;
