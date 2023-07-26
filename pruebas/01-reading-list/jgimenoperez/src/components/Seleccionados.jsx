import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import { setListasLibrosFromSeleccionados, setReorderLibros } from "../reducers/librosReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const Seleccionados = () => {
  const { librosSeleccionados } = useSelector((state) => state.listaLectura);
  const [items, setItems] = useState(librosSeleccionados);
  // const [toogleAnimationCover, setToogleAnimationCover] = useState(true);
  const dispatch = useDispatch();
  // const [hoverIndex, setHoverIndex] = useState(false);
  const dragControls = useDragControls();

  const handleReorder = (libros) => {
    setItems(libros)
  }

  useEffect(() => {
    setItems(librosSeleccionados);
  }, [librosSeleccionados]);

  useEffect(() => {
    items.length>0 &&  dispatch(setReorderLibros(items));
  }, [dispatch, items]);


  return (
    <AnimatePresence>
      <div className="listaLectura__marcados">
        <h2 className="marcados__texto">
          {items.length > 0
            ? `${items.length} libros seleccionados`
            : "No hay libros seleccionados"}
        </h2>

        {items.length > 0 && (
          <Reorder.Group
            values={items}
            className="marcados__libros"
            onReorder={(libros) => {
              handleReorder(libros)
            }}
          >
            {items.map((libro, index) => (
              <Reorder.Item
                value={libro}
                key={libro.ISBN}
                id={libro}
                dragControls={dragControls}
                layout
                animate={{
                  // y: hoverIndex !== null & toogleAnimationCover && index > hoverIndex ? "100px" : 0,     
                  // zIndex:hoverIndex !== null && index === hoverIndex ? 1 : 0, 
                }}
                style={{ top: `${index * 9}rem` }}
                className="marcados__libro"
                layoutId={libro.ISBN}
              // onHoverStart={() => setHoverIndex(index)}
              // onHoverEnd={() => setHoverIndex(null)}
              // onDragStart={() => setToogleAnimationCover(false)}
              // onDragEnd={() => setToogleAnimationCover(true)}
              >
                <div
                  onClick={() => {
                    dispatch(setListasLibrosFromSeleccionados(libro));
                  }}
                >
                  <div className="aspas__fondo"></div>
                  <div className="aspas__barra"></div>
                </div>
                <p className="marcado__titulo">{libro.title}</p>
                <img
                  className="marcados__imagenes"
                  src={libro.cover}
                  alt={libro.title}
                  loading="lazy"
                  style={{
                    height: '200px',
                    width: '100%',
                    objectFit: "cover"
                  }}
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        )}
      </div>
    </AnimatePresence>
  );
};
