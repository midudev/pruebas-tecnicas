const GridList = ({ title, children }) => {
  return (
    <div className="w-full border border-black p-4 text-center ">
      <h4 className="mb-4 text-center text-lg">{title}</h4>
      <div className="grid h-min w-full grid-cols-1 place-items-center gap-4 lg:grid-cols-2 ">
        {children}
      </div>
    </div>
  );
};

export default GridList;
