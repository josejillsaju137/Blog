import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Home from "./Pages/Home";

import { useSelector } from "react-redux";
import AddMovieData from "./Componets/AddMovieData";

function App() {
  const AddDataModal = useSelector((state, action) => state.addDataModel);
  const EditMovie = useSelector((state, action) => state.EditMovie);
  const DetailedCardModel = useSelector(
    (state, action) => state.DetailedCardModel,
  );

  return (
    <div className=' w-full no-scrollbar bg-white'>
      { AddDataModal && <AddMovieData  /> }
      { EditMovie && <AddMovieData />}
      <div>
        <Header />
      </div>

      <div className='min-h-[40rem] sm:min-h-[50rem]  bg-[#2596be]  bg-gradient-to-r from-cyan-600 to-blue-600 backdrop-filter   pt-20 sm:pt-28 mx-2 sm:mx-8 no-scrollbar'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='*'
            element={<Navigate to='/' />}
          />
          <Route
            path='/DetailedCard'
            element={<Navigate to='/' />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
