import useBookStore from "@/store/booksStore"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const BookSelected = () => {
  const { bookSelected } = useBookStore()

  return (
    <section className="bg-slate-700 p-6 rounded-e-3xl flex flex-col items-center gap-4 max-h-[1000px]">
      <h1 className="text-2xl mb-4 text-center font-bold text-white">Acerca del libro</h1>
      <Image src={bookSelected ? bookSelected?.cover : ""} alt={bookSelected ? bookSelected?.title : ""} width={300} height={400} />
      <h2 className="text-2xl mt-4 text-center font-bold text-white">{bookSelected?.title}</h2>
      <p className="text-center text-gray-400">{bookSelected?.author.name}</p>
      <div className="bg-slate-600 rounded-xl flex flex-row justify-around p-4 w-64 h-12 items-center mt-4">
        <p className="text-center text-white flex flex-col">
          <span className="text-base">{bookSelected?.pages}</span>
          <span className="text-sm text-gray-400">Paginas</span>
        </p>
        <Separator orientation="vertical" />
        <p className="text-center text-white flex flex-col">
          <span className="text-base">{bookSelected?.genre}</span>
          <span className="text-sm text-gray-400">Genero</span>
        </p>
      </div>
      <div className="flex text-white flex-col gap-2 mt-4">
        <label className="text-lg">Sinopsis:</label>
        <p className="text-gray-300 text-left w-64">{bookSelected?.synopsis}</p>
      </div>
    </section>
  )
}

export default BookSelected