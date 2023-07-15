import useBookListHeader from "@/hooks/useBookListHeader";
import TitleEditor from "./titleEditor";

const BookListHeader = () => {
  const {
    isEditable,
    editingName,
    toggleEditingName,
    title,
    count,
    changeTitle,
    deleteList,
  } = useBookListHeader();

  return (
    <div className="book-list_title">
      {editingName && isEditable ? (
        <TitleEditor title={title} changeTitle={changeTitle} />
      ) : (
        <>
          <h3>{`${title} (${count} libro${count === 1 ? "" : "s"})`}</h3>
          {isEditable ? (
            <>
              <button onClick={toggleEditingName}>Editar nombre</button>
              <button className="btn-delete-list" onClick={deleteList}>
                Eliminar lista
              </button>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default BookListHeader;
