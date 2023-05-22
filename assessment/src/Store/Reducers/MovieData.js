import { createSlice } from "@reduxjs/toolkit";
import DummyData from "../../Assets/DummyData";

const MovieData = createSlice({
  name: "MovieData",
  initialState: DummyData,
  reducers: {
    insert: (state, action) => {
      state.unshift(action.payload);
    },

    edit: ( state, action ) =>
    {
      console.log(action.payload);
      var foundIndex = state.findIndex((x) => x.title == action.payload.selecteddata
.      title);
      state[foundIndex] = action.payload.formInput;
    },
    remove: ( state, action ) =>
    {


      const obj = state.find((element) => element.title === action.payload);

      // @ts-ignore
      const index = state.indexOf(obj);

      state.splice(index, 1);
    },
  },
});

export const { insert, edit, remove } = MovieData.actions;

export default MovieData.reducer;
