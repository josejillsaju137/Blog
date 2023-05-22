import React from "react";
import DetailedCardModel, {
  closeCard,
} from "../Store/Reducers/DetailedCardModel";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import AddDataModal, { closeModal } from "../Store/Reducers/AddDataModal";

const DetailedCard = ({ movies }) => {
  const dispatch = useDispatch();
  const CloseButton = () => {
    dispatch(closeCard(""));
  };
  return (
    <div
      onClick={CloseButton}
      style={{
        backgroundImage: `url(${movies.image})`,
      }}
      className='z-50 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-0 bg-no-repeat bg-cover backdrop-filter backdrop-blur-3xl fixed overflow-scroll no-scrollbar'>
      <div className='border-2 border-gray-300  opacity-60 rounded-[12px] flex flex-col py-3 px-7   sm:w-[29rem] lg:w-[500px]  h-fit  bg-white relative'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-row col-span-2 ...'>
            <h4 className='font-extrabold'>The Movie Details</h4>
          </div>
          <div className='flex flex-row-reverse'>
            <button
              className='absolute items-end basis-1/4'
              onClick={CloseButton}>
              <GrClose />
            </button>
          </div>
        </div>
        {/* <div className='Flex place-content-center place-items-center align-middle h-[250px] w-[250px] self-center '>
        <img alt="" src={doc} className="object-fill" />
      </div> */}
        <div className='flex flex-col justify-center py-1 pt-8'>
          <div>
            <h1 className='flex flex-row align-middle font-extrabold '>
              Title
            </h1>
            <div className='flex bg-gray-100 rounded-md py-2 px-3 text-[12px]'>
              <h3 className='ml-2 bg-transparent border-none outline-none appearance-none h-15 text-base text-black font-semibold'>
                {movies.title}
              </h3>
            </div>
          </div>
          <div>
            <h1 className='flex flex-row align-middle font-extrabold '>
              Genre
            </h1>
            <div className='flex bg-gray-100 rounded-md py-2 px-3 text-[12px]'>
              <h4 className='text-base text-black font-semibold'>
                {movies.genre}
              </h4>
            </div>
          </div>
          <div>
            <h1 className='flex flex-row align-middle  font-extrabold '>
              Duration
            </h1>
            <div className='flex bg-gray-100 rounded-md py-2 px-3 text-[12px]'>
              <h4 className='text-base text-black font-semibold'>
                {movies.duration}
                <label className='text-[10px]'>Min </label>
              </h4>
            </div>
          </div>
          <div className='pb-2'>
            <h1 className='flex flex-row align-middle font-extrabold '>
              Description
            </h1>
            <div className='flex bg-gray-100 rounded-md py-2 px-3 text-[12px]'>
              <h4 className='text-base text-black font-semibold text-justify'>
                {movies.description}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
