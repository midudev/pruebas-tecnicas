export default function Home() {
  return (
    <div className='flex min-h-screen flex-col md:max-w-screen-md md:mx-auto lg:max-w-screen-lg lg:mx-auto xl:max-w-screen-xl xl:mx-auto'>
      <div className='flex-1 flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 m-4 md:m-6 lg:m-8 xl:m-10'>
        {/* Navbar */}
        <nav className='flex flex-row justify-between items-center bg-secondary py-4 px-6 rounded-md'>
          <button>Toggle</button>
          <h2 className='text-2xl font-medium'>Readerx</h2>
          <button>Toggle</button>
        </nav>
        {/* Main */}
        <main className='flex-1'>
          <section className='grid grid-cols-3 md:grid-cols-4 md:gap-4 lg:gap-5 xl:gap-6 lg:grid-cols-5 xl:grid-cols-7 gap-3'>
            <article className='bg-secondary rounded-md p-4 h-[200px]'></article>
            <article className='bg-secondary rounded-md p-4 h-[200px]'></article>
            <article className='bg-secondary rounded-md p-4 h-[200px]'></article>
            <article className='bg-secondary rounded-md p-4 h-[200px]'></article>
            <article className='bg-secondary rounded-md p-4 h-[200px]'></article>
            <article className='bg-secondary rounded-md p-4 h-[200px]'></article>
          </section>
        </main>
      </div>
      {/* Popup modal */}
      <footer>djdjfj</footer>
    </div>
  );
}
