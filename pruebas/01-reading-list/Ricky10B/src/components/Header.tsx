import { BtnLibro } from "./BtnLibro";
import { FilterGenre } from "./FilterGenre";

export function Header () {
  return (
    <header>
      <div className='flex justify-between items-center my-4 mx-5'>
        <h1 className='text-center text-2xl sm:text-5xl'>
          Catalogo de libros
        </h1>
        <div className="block 2xl:hidden">
          <BtnLibro />
        </div>
      </div>
      <FilterGenre />
    </header>
  )
}
