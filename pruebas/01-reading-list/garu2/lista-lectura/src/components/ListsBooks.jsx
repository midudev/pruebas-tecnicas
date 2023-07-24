//import listBooks from '../data/books.json'
import { filterCat } from "../helpers/filterCat"
import AddList from "./icon/AddList";

const ListsBooks = ({ data, category, setMyList }) => {
  //console.log('data: ', listBooks);
  const newFilter = filterCat(data, category);

  return (
    <section className='flex flex-wrap gap-5 justify-center w-[80%]'>
      {
        newFilter.map(item => (
          <div
            key={item.book.ISBN}
            className='bg-[#C6B1FE] rounded w-[200px] shadow relative card-book'
          >
            <img 
              className='h-[100%] rounded object-cover' 
              src={item.book.cover} 
              alt=""
            />
            <div>

            </div>

            <div className='bg-[#B9D9FF] absolute inset-0 -z-10 info-card rounded p-3 pr-8 flex flex-col justify-between'>
              <span className='block bg-[#FFC93B] w-fit m-auto my-0 px-2 rounded mb-2'>
                {item.book.genre}
              </span>
              <span
                className='text-sm'
              >
                {item.book.author.name}
              </span>
              <h5 className='font-medium leading-5 text-xl mt-2'>{item.book.title}</h5>
              <p className='mt-3 leading-5 grow'>
                {item.book.synopsis}
              </p>
              <span
                className='align-bottom bg-[#CAA1EF] w-fit m-auto my-0 px-2 rounded'
              >
                {item.book.year}
              </span>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default ListsBooks