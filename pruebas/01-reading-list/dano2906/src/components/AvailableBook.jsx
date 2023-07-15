
export default function AvailableBook({book}) {
    const {title,pages,genre,cover,year,author} = book;
  
    return (
    <article className="w-full h-[460px] mx-auto bg-slate-700 flex flex-col items-center justify-center gap-y-3 font-semibold text-center rounded relative">
        <h3 className="text-xl text-blue-500">{title}</h3>
        <h4 className="text-base text-blue-400 ">{genre}--<span className="text-base">{pages} páginas</span></h4>
        <img src={cover} alt={`Portada del libro ${title}`} width={240} height={320} className="w-60 h-80 object-fill rounded-md"/>
        <h5 className="text-blue-400">{author.name}--{year}</h5>
        <button className="bg-slate-500 text-blue-800 transition-all p-2 absolute top-0 left-0 rounded-br-3xl hover:scale-110">Leer</button>
    </article>
  )
}
