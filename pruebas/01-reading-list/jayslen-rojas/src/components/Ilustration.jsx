import ilustration from '../assets/ilustration.svg'

export function IlustrationSection () {
  return (
        <section
      className='h-96 bg-[#f5ebe0] px-3 grid place-content-center'
      style={{
        backgroundImage: `url(${ilustration})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left'
      }}
      >
        <div className='bg-[#b8aea4] max-w-sm rounded flex flex-col justify-center items-center gap-1 py-3'>
          <h1 className='font-bold text-xl'>Discover our Books</h1>
          <p className='text-center'>Somos un sello editorial de libros multinacional. Queremos ofrecer a nuestro público una forma de ver nuestro catálogo y poder guardar los libros que les interesan en una lista de lectura.</p>
          <button className='bg-[#ff9f1c] inline p-2 rounded'>Discover</button>
        </div>
      </section>

  )
}
