import { useEffect, useState } from "react";
import { getData } from "../services/getData";
import { useStore } from "../store/store";

export const UseGetData = (endpoint: string) => {
  const { setBooks, setGenres } = useStore();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    getData(endpoint)
      .then((response) => {
        setLoading(false);
        setBooks(response);
        setGenres(
          response
            ?.map(({ book: { genre } }) => genre)
            .filter((v, i, arr) => arr.indexOf(v) === i)
        );
        setLoading(false);
        //console.log("In then block");
      })
      .catch((err) => console.log("ERROR", err));
  }, []);

  return { loading };
};
