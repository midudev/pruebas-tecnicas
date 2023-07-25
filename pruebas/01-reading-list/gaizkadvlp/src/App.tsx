import { useEffect } from "react";
import { connect } from "react-redux";
import Disponibles from "./components/Disponibles";
import Favoritos from "./components/Favoritos";
import useAxios from "./hooks/useAxios";
import Spinner from "./utils/Spinner";
import { mapDispatchToProps } from "./redux/mapDispatchToProps";
import { mapStateToProps } from "./redux/mapStateToProps";
import { Book } from "./interfaces/interfaces";
import { getFavoritos } from "./utils/helper.functions";

//const baseURL:string = './data/books.json'

const URL = "/books.json"; //TODO --> process.env.REACT_APP_BASE_URL

function App(props: any) {
  const { dataToRedux, addFavo, removeDisponibles, removeInitFavoritos } =
    props;
  const { response, loading, error } = useAxios(URL);

  useEffect(() => {
    if (response) {
      //Guardamos todos los libros en el estadoGlobal
      let fetchedData: Book[] = [];
      let savedBooks: any = getFavoritos();

      for (let libro of response.library) {
        fetchedData.push(libro.book);
      }
      dataToRedux(fetchedData);
      removeInitFavoritos();
      if (savedBooks) {
        for (let libroSalvado of savedBooks) {
          for (let i = 0; i < fetchedData.length; i++) {
            if (fetchedData[i].ISBN === libroSalvado.ISBN) {
              addFavo(libroSalvado); //Se añade a favoritos
              removeDisponibles(libroSalvado); //Se borra de Disponibles
            }
          }
        }
      }
    }
  }, [response]);

  return (
    <div className="listaContainer">
      {loading ? <Spinner /> : <Disponibles />}
      {loading ? <Spinner /> : <Favoritos />}
      {error && <p>{error}</p>}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
