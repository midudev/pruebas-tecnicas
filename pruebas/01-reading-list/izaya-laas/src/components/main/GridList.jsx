const GridList = ({ title, children, handleDrop }) => {
  const draggingOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full w-full rounded-bl-[255px_5px] rounded-br-[255px_5px] rounded-tl-[255px_5px]  rounded-tr-[255px_5px] border border-black p-4 text-center">
      <h4 className="mb-4 text-center text-lg">{title}</h4>
      <div
        droppable="true"
        onDragOver={draggingOver}
        onDrop={handleDrop}
        className="grid h-full w-full auto-rows-min grid-cols-1 place-items-center gap-4 lg:grid-cols-2 "
      >
        {children}
      </div>
    </div>
  );
};

export default GridList;
