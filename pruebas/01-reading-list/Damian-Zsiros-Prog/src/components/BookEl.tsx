import { Book, Library } from "../types/Books"

interface Props {
  library: Library
  setBookAtAdd: React.Dispatch<React.SetStateAction<Book>>
}
export default function BookEl({ library, setBookAtAdd }: Props) {
  return (
    <article
      key={library.book.ISBN}
      onClick={() => {
        setBookAtAdd(library.book)
      }}
    >
      <img
        className="object-contain max-w-[200px] "
        src={library.book.cover}
        alt={library.book.title}
      />
    </article>
  )
}
