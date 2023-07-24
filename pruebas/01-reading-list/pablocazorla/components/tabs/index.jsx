import useTabs from "@/hooks/useTabs";
import classNames from "classnames";

const Tabs = () => {
  const {
    readingLists,
    currentReadingListId,
    setCurrentReadingListId,
    createList,
    total,
  } = useTabs();

  return (
    <nav className="list-nav" data-testid="list-nav">
      <button
        className={classNames("tab tab-all", { active: !currentReadingListId })}
        onClick={() => {
          setCurrentReadingListId(null);
        }}
      >
        Todos los libros ({total})
      </button>
      {Object.entries(readingLists).map(([id, tab]) => {
        return (
          <button
            className={classNames("tab", {
              active: currentReadingListId === id,
            })}
            key={id}
            onClick={() => {
              setCurrentReadingListId(id);
            }}
          >{`${tab.name} (${tab.books.length})`}</button>
        );
      })}
      <button className="tab tab-add" onClick={createList}>
        + Agregar lista de lectura
      </button>
    </nav>
  );
};

export default Tabs;
