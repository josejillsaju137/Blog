import { createSlice } from '@reduxjs/toolkit'

const initialState = false;



const EditMovieModalReducer = createSlice({
  name: "EditMovieModalReducer",
  initialState,
  reducers: {
    editOpenModal: (state, action) => {
      return (state = true);
    },
    editCloseModal: (state, action) => {
      return (state = false);
    },
  },
});


export const {editOpenModal,editCloseModal} = EditMovieModalReducer.actions

export default EditMovieModalReducer.reducer