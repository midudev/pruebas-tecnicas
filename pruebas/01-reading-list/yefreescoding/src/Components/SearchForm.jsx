export default function SearchForm() {
  return (
    <>
      <button className="p-2 border border-gray-400 rounded-lg text-gray-400 hover:bg-gray-200 transition-all">
        Search by book name...
      </button>
      <form
        className="hidden basis-[20em] grow flex gap-4 justify-center md:justify-end"
        action=""
      >
        <input
          className="border border-gray-400 rounded-lg"
          type="search"
          required
        />
        <button type="submit" placeholder="Harry Potter, The clean code...">
          Search
        </button>
      </form>
    </>
  );
}
