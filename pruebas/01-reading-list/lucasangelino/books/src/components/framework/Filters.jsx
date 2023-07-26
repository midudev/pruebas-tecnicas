import {
  GreenBook,
  RedBook,
  BlueBook,
  OrgangeBook,
  AllBooks,
} from "./icons/bookIcons";

const Filters = ({ handleClick }) => {
  return (
    <section className="flex flex-row justify-evenly items-center my-5">
      <button
        className="flex flex-col justify-center items-center"
        onClick={() => handleClick("")}
      >
        <AllBooks />
        <span className="text-slate-600 text-sm font-semibold">Todos</span>
      </button>

      <button
        className="flex flex-col justify-center items-center"
        onClick={() => handleClick("Fantasía")}
      >
        <RedBook />
        <span className="text-slate-600 text-sm font-semibold">Fantasia</span>
      </button>

      <button
        className="flex flex-col justify-center items-center"
        onClick={() => handleClick("Ciencia ficción")}
      >
        <BlueBook />
        <span className="text-slate-600 text-sm font-semibold">CiFi.</span>
      </button>

      <button
        className="flex flex-col justify-center items-center"
        onClick={() => handleClick(" ")}
      >
        <OrgangeBook />
        <span className="text-slate-600 text-sm font-semibold">Terror</span>
      </button>
    </section>
  );
};

export { Filters };
