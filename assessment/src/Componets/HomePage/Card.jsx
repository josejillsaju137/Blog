import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { CiTimer } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Store/Reducers/MovieData";

import AddMovieData from "../AddMovieData";
import { editOpenModal } from "../../Store/Reducers/EditMovieModalReducer";
import EditMovie from "../EditMovie";
import { selecteddata } from "../../Store/Reducers/SelectedMovieDetailsReducers";
import { openModal } from "../../Store/Reducers/AddDataModal";
const Card = ({ movies, onclick }) => {
  const { title, description, duration, genre, image } = movies;
  // console.log(movies);
  const [selectedMovie, setSelectedMovie] = useState();
  // const imgurl=require(imageurl)
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const [editOption, setEditOption] = useState(false);
  const DetailedCardModel = useSelector(
    (state, action) => state.DetailedCardModel,
  );
  // dispatch(selecteddata(movies));
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`flex relative cursor-pointer flex-col    justify-center rounded-lg  shadow-lg w-56 h-56 bg-cover bg-no-repeat  bg-center  backdrop-blur-3xl hover:scale-110 `}>
      <div
        onClick={(e) => {
          onclick(movies);
          setSelectedMovie(movies);
        }}
        className='flex h-1/2 p-1 sm:p-2'>
        <>{/* {console.log(imageurl)} */}</>
        {/* <img src={require()} alt="sf" /> */}
        <p
          className='flex justify-center gap-1 text-white text-xs
        '>
          {" "}
          <CiTimer className=' text-white text-xs font-bold' />
          {duration} Min
        </p>
      </div>
      <div  onClick={(e) => {
          onclick(movies);
          setSelectedMovie(movies);
        }} className='bg-neutral-50 bg-opacity-60 p-1 sm:p-2 w-full h-28 rounded-lg '>
        <h1 className='font-bold text-gray-800'>{title}</h1>
        <div
          className='flex flex-row pt-3
         place-items-center'>
          <label className='text-xs font-bold text-slate-800'>genre : </label>{" "}
          <p className='text-xs font-bold '>{genre}</p>
        </div>

          <div>
            <h6 className=' text-justify text-[14px] indent-2  text-ellipsis overflow-hidden truncate  font-semibold pt-2'>{description}</h6>
            <div className='flex justify-around'></div>
          </div>
        {/* )} */}
      </div>
      {isShown && (
        <div className='absolute top-0 right-0 bg-black w-8 h-56 rounded-r-lg  opacity-50 transition-opacity duration-100 flex flex-col justify-evenly'>
          <button
            onClick={() => {
              dispatch(remove(title));
            }}
            className='flex flex-1  justify-center'>
            <MdDeleteForever className='self-center  text-lg font-bold text-white h-4' />
          </button>

          <button
            onClick={() => {
              console.log("editde");
              dispatch(openModal(""));
              setEditOption( true );
              dispatch( selecteddata( movies ) )
              dispatch(editOpenModal(''))
            }}
            className='flex flex-1 content-center justify-center '>
            {" "}
            <FiEdit className='self-center text-lg text-white h-4' />
          </button>
        </div>
      )}
      {/* {editOption && <AddMovieData movie={selectedMovie} />} */}
    </div>
  );
};

export default Card;
