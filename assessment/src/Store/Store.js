import {configureStore} from '@reduxjs/toolkit'
import AddDataModal from './Reducers/AddDataModal';
import DetailedCardModel from './Reducers/DetailedCardModel';
import MovieData from './Reducers/MovieData';
import EditMovieModalReducer from './Reducers/EditMovieModalReducer';
import SelectedMovieDetailsReducers from './Reducers/SelectedMovieDetailsReducers';



export  const store = configureStore( {
    reducer: {

        addDataModel: AddDataModal,
        DetailedCardModel: DetailedCardModel,
        MovieData: MovieData,
        EditMovieModalReducer: EditMovieModalReducer,
        SelectedMovieDetailsReducers:SelectedMovieDetailsReducers
    },
})