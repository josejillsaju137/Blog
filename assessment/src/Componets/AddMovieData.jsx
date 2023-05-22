import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../Store/Reducers/AddDataModal";
import { edit, insert } from "../Store/Reducers/MovieData";
const genreList = [
  "Action",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Thriller",
  "",
];
const AddMovieData = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [heading, setHeading] = useState("Enter");
  const [button, setButton] = useState(" Add New Movie");

  const selecteddata = useSelector(
    (state, action) => state.SelectedMovieDetailsReducers,
  );
  const EditMovieModalReducer = useSelector(
    (state, action) => state.EditMovieModalReducer,
  );
  console.log(EditMovieModalReducer);
  useEffect(() => {
    if (EditMovieModalReducer === true) {
      setFile(selecteddata.image);
      setButton("Save");
      setHeading("Edit");
      setFormInput({
        title: selecteddata.title,
        description: selecteddata.description,
        duration: selecteddata.duration,
        genre: selecteddata.genre,
        image: selecteddata.image,
      });
    }
  }, []);

  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    title: "",
    duration: "",
    genre: "",
    image: "",
    description: "",
  });
  // function to Close the popup
  const closeModals = () => {
    dispatch(closeModal(""));
  };
  // function to handle the form data
  const handleOnChange = (event) => {
    console.log(event.target.name, event.target.value);
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };
  //handle Form submit
  const handleFormSubmit = () => {
    console.log("formInput.genre.length", formInput.genre.length);
    if (EditMovieModalReducer === true) {
      if (formInput.genre.length !== 0) {
        dispatch(edit({ formInput, selecteddata }));
        closeModals();
        console.log("handleFormSubmit");
        navigate("/");
        console.log("formInput", formInput);
      } else {
        setError(true);
      }
    } else {
      if (formInput.genre.length !== 0) {
        dispatch(insert(formInput));
        closeModals();
        console.log("handleFormSub)mit");
        navigate("/");
      } else {
        setError(true);
      }
    }
  };
  const addDataModelState = useSelector((state) => state);

  return (
    <div className='z-[60] inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm pt-[1rem] lg:pt-[15rem] fixed overflow-y-scroll w-full h-full'>
      <div className='border-2 border-gray-300 rounded-[12px] flex flex-col py-3 px-7 w-fit min-w-[350px] lg:w-[500px]  h-fit my-8  bg-white relative'>
        <div className='grid grid-cols-3 gap-4 pb-4'>
          <div className='flex flex-row col-span-2 ...'>
            <h4 className='font-bold'> {heading} The Movie Details</h4>
          </div>
          <div className='flex flex-row-reverse'>
            <button
              className='absolute items-end basis-1/4'
              onClick={closeModals}>
              <GrClose />
            </button>
          </div>
        </div>
        {file.length > 0 ? (
          <div className='Flex place-content-center  place-items-center align-middle  w-2/3 self-center '>
            <img
              alt=''
              src={file}
              className='object-fill rounded-lg h-[180px] w-full'
            />
          </div>
        ) : (
          ""
        )}
        <form
          className='w-full '
          action=''
          onSubmit={(event) => {
            event.preventDefault();
            handleFormSubmit();
          }}>
          <div className='flex flex-col justify-center py-1'>
            <div>
              <h1 className='flex flex-row align-middle '>Title</h1>
              <div className='flex bg-gray-100 rounded-md py-2 px-3 text-[12px]'>
                <input
                  onChange={handleOnChange}
                  name='title'
                  defaultValue={selecteddata.title}
                  required
                  placeholder='Enter The Movie Title'
                  className='ml-2 bg-transparent border-none outline-none appearance-none h-15'
                />
              </div>
            </div>
            <div>
              <h1 className='flex flex-row align-middle '>
                Genre
                {error && (
                  <label className='text-[10px] text-red-500'>
                    Select the Genre
                  </label>
                )}
              </h1>
              <div className='flex bg-gray-100 rounded-md py-2 px-3 text-[12px]'>
                <select
                  defaultValue={selecteddata.genre}
                  required
                  name='genre'
                  onChange={(event) => {
                    console.log(event.target.value);
                    setFormInput({
                      ...formInput,
                      [event.target.name]: event.target.value,
                    });
                  }}
                  placeholder='Enter The Movie genere'
                  className='ml-2 bg-transparent border-none outline-none  w-full h-15'>
                  {genreList.map((data, key) => {
                    return (
                      <option
                        key={key}
                        selected
                        defaultValue={data}>
                        {data}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div>
              <h1 className='flex flex-row align-middle '>
                Duration <p className='text-[10px]'>(minutes) </p>
              </h1>
              <div className='flex bg-gray-100 rounded-md py-2 px-3 text-[12px]'>
                <input
                  required
                  defaultValue={parseInt(selecteddata.duration)}
                  name='duration'
                  type='number'
                  placeholder='Enter The Duration in Minutes'
                  className='ml-2 bg-transparent border-none outline-none appearance-none  w-full h-15'
                />
              </div>
            </div>
            <div className='pb-2'>
              <h1 className='flex flex-row align-middle '>Description</h1>
              <div className='flex bg-gray-100 rounded-md py-2 px-3 text-[12px]'>
                <textarea
                  defaultValue={selecteddata.description}
                  onChange={handleOnChange}
                  name='description'
                  className='resize-y rounded-md w-full outline-none appearance-none bg-transparent h-10'></textarea>
              </div>
            </div>
            <div className='pb-2'>
              <h1 className='flex flex-row align-middle '>Upload Image</h1>
              <div className='flex bg-gray-100 rounded-md py-2 px-3 text-[12px]'>
                <input
                  required
                  name='image'
                  type='file'
                  accept='.png,.jpg'
                  // onChange={e => dispatch(setProfileImage(e.target.files[0]))}
                  onChange={(e) => {
                    console.log(e.target?.files);
                    // @ts-ignore
                    const fileList = e.target?.files[0];
                    console.log(fileList);
                    const url = URL.createObjectURL(fileList);

                    setFile(url);
                    // console.log(URL.createObjectURL(e.target?.files[0]));
                    // setFile( URL.createObjectURL( e.target?.files[ 0 ] ) );
                    console.log(url);
                    setFormInput({ ...formInput, [e.target.name]: url });
                  }}
                />
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='bg-blue-600 w-full rounded-md text-white font-semibold
                                   p-[5px] text-[12px]'>
            {button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovieData;
