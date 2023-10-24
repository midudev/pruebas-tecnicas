import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hasInLibrary } from "../redux/bookSlice";
import library from "../mocks/books.json";

const useFetch = () => {
  const [data, setData] = useState([]);
  const { inLibrary } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  //request data from api
  useEffect(() => {
    const getData = async () => {
      setTimeout(() => {
        setData(library.library);
      }, 1000);
    };
    getData();
  }, []);

  //get the number of all books
  useEffect(() => {
    if (!inLibrary) {
      dispatch(hasInLibrary(library.library.length));
    }
  }, []);

  return { data };
};

export default useFetch;
