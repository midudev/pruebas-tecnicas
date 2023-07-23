import { useEffect } from "react";
import axios from "axios";
import React from "react";
import { Library } from "../interfaces/interfaces";

//axios.defaults.baseURL ='/';

export interface Respuesta {
  library: Library[]
}

const useAxios = (url: string = "/books.json") => {
  const [response, setResponse] = React.useState<Respuesta>();
  const [error, setError] = React.useState<any>();
  const [loading, setLoading] = React.useState<Boolean>(true);
  
  //console.log("EN EL USEAXIOS!!!");
  useEffect(() => {
    //console.log("EN EL USEAXIOS REALIZANDO LA PETICIÓN!!!");
    const fetchData = async () => {
      setTimeout(async () => {  //TODO --> Quitar retardo, está puesto para que salga el Spinner
        await axios
          .get(url)
          .then((res) => {
            setResponse(res.data)
            //setLoading(false)
          })
          .catch((err) => setError(err))
          .finally(() => setLoading(false));
      }, 1500);                 //TODO --> Quitar retardo, está puesto para que salga el Spinner
    };

    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
