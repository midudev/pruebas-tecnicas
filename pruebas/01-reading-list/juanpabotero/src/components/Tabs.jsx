export function Tabs({
  filteredBooksMapped,
  isReadingListActive,
  setIsReadingListActive,
  readingList,
  clearReadingList
}) {
  return (
    <section
      className="grid grid-cols-2 sm:grid-flow-col sm:grid-cols-none 
      justify-start gap-8 mb-10"
    >
      <button
        className={`font-bold text-white pb-1 ${
          isReadingListActive ? '' : 'border-b'
        }`}
        onClick={() => setIsReadingListActive(false)}
      >
        Libros disponibles ({filteredBooksMapped.length})
      </button>
      <button
        className={`font-bold text-white pb-1 ${
          isReadingListActive ? 'border-b' : ''
        }`}
        onClick={() => setIsReadingListActive(true)}
      >
        Lista de lectura ({readingList.length})
      </button>
      <button
        className="text-white text-sm bg-gray-600 px-2 rounded border border-transparent hover:border-gray-400 transition-all duration-200"
        onClick={clearReadingList}
      >
        Limpiar lista
      </button>
    </section>
  );
}
