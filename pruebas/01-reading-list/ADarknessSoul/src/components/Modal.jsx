import { useDispatch } from "react-redux";
import { setIsModal } from "../store/slices/WhatABook";

export const Modal = ({
  ISBN = 0,
  author = {},
  cover = "",
  genre = "",
  pages = 0,
  synopsis = "",
  title = "",
  year = 0,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        id={`staticBackdrop-${ISBN}`}
      >
        <div className="modal-dialog" style={{ maxWidth: "600px" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{title}</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => dispatch(setIsModal(false))}
              ></button>
            </div>

            <div className="modal-body d-flex flex-sm-row flex-column justify-content-center align-items-center">
              <img
                src={cover}
                alt="Portada del libro"
                className="Modal__image"
                height="500px"
                width="300px"
              />

              <ul className="list-group ms-3">
                <li className="list-group-item Modal__item">
                  <span className="text-secondColor">Sinopsis:</span> {synopsis}
                </li>
                <li className="list-group-item Modal__item">
                  <span className="text-secondColor">Páginas:</span> {pages}
                </li>
                <li className="list-group-item Modal__item">
                  <span className="text-secondColor">Género:</span> {genre}
                </li>
                <li className="list-group-item Modal__item">
                  <span className="text-secondColor">Año:</span> {year}
                </li>
                <li className="list-group-item Modal__item">
                  <span className="text-secondColor">ISBN:</span> {ISBN}
                </li>
                <li className="list-group-item Modal__item">
                  <span className="text-secondColor">Nombre del autor:</span>{" "}
                  {author?.name}
                </li>
                {author?.otherBooks?.length === 0 ? (
                  <></>
                ) : (
                  author?.otherBooks?.map((book) => (
                    <li key={book} className="list-group-item Modal__item">
                      <span className="text-secondColor">Otra obra:</span>{" "}
                      {book}
                    </li>
                  ))
                )}
              </ul>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => dispatch(setIsModal(false))}
                style={{ fontSize: "1.2rem" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
