import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setListasLibrosFromDisponibles } from "../reducers/librosReducer";
import { Busqueda } from "./Busqueda";

export const Disponibles = () => {
  const dispatch = useDispatch();
  const { librosFiltrados,librosDisponibles } = useSelector((state) => state.listaLectura);
  

  return (
    <div className="listaLectura__disponibles">
      <Busqueda/>
      <h2 className="disponibles__texto">{`${librosDisponibles.length} libros disponibles`}</h2>
      <ul className="disponibles__libros">
        {

          librosFiltrados.length > 0 && (librosFiltrados.map((libro, index) => (
            <motion.li
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.5 },
              }}
              layout
              // transition={{ duration: 0.3 }}
              className="disponibles__libro"
              key={libro.ISBN}
              layoutId={libro.ISBN}
              onClick={() => {
                dispatch(setListasLibrosFromDisponibles(libro));
              }}
            >
              <div className="disponible_textos">
                <h3 className="disponibles__titulo">{libro.title}</h3>
                <p className="disponibles__año">{libro.year}</p>
              </div>
              <img
                className={`disponibles__imagenes ${index === 0 ? "disponible" : ""
                  }`}
                src={libro.cover}
                alt={libro.title}
                loading="lazy"
              />
            </motion.li>
          )))

        }
      </ul>
    </div>
  );
};
