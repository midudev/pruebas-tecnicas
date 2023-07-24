import useAddOrRemoveReadingList from "@/hooks/useAddOrRemoveReadingList";
import classNames from "classnames";

const AddOrRemoveReadingList = ({ ISBN }) => {
  const {
    existsReadingLists,
    currentReadingListId,
    onFocusAddButton,
    onBlurAddButton,
    visibleReadingList,
    readingListItems,
    addToList,
    removeFromList,
  } = useAddOrRemoveReadingList(ISBN);

  return (
    existsReadingLists && (
      <div className="book-btn">
        {currentReadingListId ? (
          <button
            className="btn book-btn_remove"
            title="Quitar de la lista de lectura"
            onClick={() => {
              removeFromList(currentReadingListId);
            }}
          >
            -
          </button>
        ) : (
          <>
            <button
              className="btn book-btn_add"
              title="Agregar a lista de lectura"
              onFocus={onFocusAddButton}
              onBlur={onBlurAddButton}
            >
              +
            </button>
            <div
              className={classNames("book-btn_pad", {
                visible: visibleReadingList,
              })}
            >
              <div className="book-btn_pad-title">
                Agregar o quitar
                <br />a lista de lectura:
              </div>
              {readingListItems.map(({ id, name, isAdded }) => {
                return (
                  <button
                    className="book-btn_pad-btn"
                    key={id}
                    title={isAdded ? "Quitar" : "Agregar"}
                    onClick={() => {
                      if (isAdded) {
                        removeFromList(id);
                      } else {
                        addToList(id);
                      }
                    }}
                  >
                    <span className={isAdded ? "to-remove" : "to-add"}>
                      {isAdded ? "-" : "+"}
                    </span>{" "}
                    {name}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    )
  );
};

export default AddOrRemoveReadingList;
