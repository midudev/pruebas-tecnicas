//import "./styles/App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import Disponibles from "./components/Disponibles";
import Favoritos from "./components/Favoritos";
import useAxios from "./hooks/useAxios";
import Spinner from "./utils/Spinner";
//import "./styles/spinner.css";
import { mapStateToProps } from "./redux/estado-aplicacion";
import { mapDispatchToProps } from "./redux/mapDispatchToProps";
import { TipoGenero } from './interfaces/enums';
import { Book } from "./interfaces/interfaces";
import { getFavoritos } from "./utils/helper.functions";

//const baseURL:string = './data/books.json'

const URL = "/books.json"; //TODO --> process.env.REACT_APP_BASE_URL

function App(props: any) {
  console.log(props)
  const { dataToRedux, addFavo, removeDisponibles, removeInitFavoritos } = props;
  const { response, loading, error } = useAxios(URL);
  const { filtro } = props.libreria;

  useEffect(() => {
    console.log("en el useffect")
    if (response) {    //Guardamos todos los libros en el estadoGlobal
      console.log("Tenemos response")
      let fetchedData: Book[] = [];
      let savedBooks: any = getFavoritos();
      
      for (let libro of response.library) {
        fetchedData.push(libro.book);
      }
      console.log("Dispara data to redux")
      dataToRedux(fetchedData);
      removeInitFavoritos()
      if (savedBooks) {
        for (let libroSalvado of savedBooks) {
          console.log(libroSalvado)
          console.log(fetchedData)
          for (let i = 0; i < fetchedData.length; i++){
            console.log(fetchedData[i].title)
            if (fetchedData[i].ISBN === libroSalvado.ISBN){
              console.log("ENCOTNRADO")
              console.log(libroSalvado.title)
              addFavo(libroSalvado);           //Se añade a favoritos
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
function addFavo(libroSalvado: any) {
  throw new Error("Function not implemented.");
}

function removeDisponibles(libroSalvado: any) {
  throw new Error("Function not implemented.");
}

