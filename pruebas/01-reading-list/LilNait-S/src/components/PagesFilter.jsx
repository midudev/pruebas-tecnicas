/* eslint-disable react/prop-types */
const PagesFilter = ({
  progressPages,
  handlePages,
  setMinPages,
  minPages,
  maxPages,
  setMaxPages,
}) => {
  return (
    <section className="flex flex-col justify-center gap-4 ">
      <span>Cantidad de páginas</span>
      <div className="w-[200px] relative">
        <div className="h-2 rounded bg-slate-400 relative">
          <div
            ref={progressPages}
            className="h-2 absolute rounded-md bg-amber-200"
          />
        </div>
        <div className="relative">
          <input
            value={minPages}
            onChange={handlePages(setMinPages)}
            type="range"
            min="0"
            max="1500"
            className="absolute top-[-5px] h-[3px] w-full appearance-none pointer-events-none bg-none bg-transparent"
          />
          <input
            value={maxPages}
            onChange={handlePages(setMaxPages)}
            type="range"
            min="0"
            max="1500"
            className="absolute top-[-5px] h-[3px] w-full appearance-none pointer-events-none bg-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex justify-between mt-3 text-xs">
        <span className="py-2 px-3 bg-amber-200 rounded-md">
          Min. {minPages}
        </span>
        <span className="py-2 px-3 bg-amber-200 rounded-md">
          Max. {maxPages}
        </span>
      </div>
    </section>
  );
};

export default PagesFilter;
