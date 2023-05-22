import React, { memo, useState } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import DetailedCard from "../Componets/DetailedCard";
import Card from "../Componets/HomePage/Card";
import { openModal } from "../Store/Reducers/AddDataModal";
import { openCard } from "../Store/Reducers/DetailedCardModel";
const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const dispatch = useDispatch();

  const DetailedCardModel = useSelector(
    (state, action) => state.DetailedCardModel,
  );

  const MovieDatas = useSelector((state, action) => state);

  const ButtonClick = () => {
    dispatch(openModal(""));
  };
  const CardClick = (movie) => {
    dispatch(openCard(""));
    console.log("closeCard( DetailedCardModel )");
    setSelectedMovie(movie);
    // dispatch(selecteddata(movie))
  };
  const MovieData = useSelector((state, action) => state.MovieData);
  return (
    <div className='flex flex-col w-full no-scrolbar'>
      {DetailedCardModel && <DetailedCard movies={selectedMovie} />}
      <div className='flex justify-end justify-self-end  pb-3'>
        <button
          onClick={(e) => {
            ButtonClick();
            console.log("BUTTON PRESSED");
          }}>
          <HiOutlineViewGridAdd className=' flex w-11 h-12 rounded-lg mx-6  p-2 shadow-md cursor-pointer transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-125 hover:bg-transparent  duration-300' />
        </button>
      </div>

      <div className='flex flex-wrap justify-center gap-8 p-8'>
        {MovieData.map((data, key) => {
          return (
            <Card
              onclick={CardClick}
              movies={data}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(Home);
