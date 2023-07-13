function loading() {
  return (
    <section className='grid grid-cols-3 md:grid-cols-4 md:gap-4 lg:gap-5 xl:gap-6 lg:grid-cols-5 xl:grid-cols-7 gap-3'>
      {Array.from({ length: 8 }, (_, id: number) => id + 1).map((book) => (
        <section
          key={book}
          className='bg-secondary rounded-md p-4 h-[200px] cursor-pointer hover:scale-95 transition-all'
        ></section>
      ))}
    </section>
  );
}

export default loading;
