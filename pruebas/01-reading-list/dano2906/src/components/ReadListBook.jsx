import {useReadListStore} from "../stores/BookStore";

export default function ReadListBook({book}) {
  const {title,cover,ISBN} = book;
  const remove = useReadListStore(state => state.remove)

  return (
    <article className="w-full h-full flex flex-col items-center justify-center my-1">
      <img src={cover} alt={`Portada del libro ${title}`} width={128} height={160} className="w-36 h-44 object-fill rounded-md relative transition-all hover:opacity-50 hover:shadow-md hover:shadow-red-500" onClick={()=>remove(ISBN)}/>
    </article>
  )
}
