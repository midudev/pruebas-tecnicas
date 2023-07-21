import { useBooks } from '../hooks/useBooks'

export const Authors = () => {
  const { allAuthors } = useBooks()
  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-bold">Autores</h1>
      <div className="flex justify-center flex-wrap gap-6">
        {
          allAuthors.map((author) => (
            <span
              key={author.name}
              className="p-2 rounded bg-title text-white"
            >
              {author.name}
            </span>
          ))
        }
      </div>
    </>
  )
}
