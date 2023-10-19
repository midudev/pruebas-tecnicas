interface Props {
  changeGenre: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
export default function Header({ changeGenre }: Props) {
  return (
    <header className="">
      <h1 className="font-bold">Book List</h1>
      <h2 className="text-2xl">Create your reading list</h2>
      <div>
        <select onChange={changeGenre}>
          <option>Todas</option>
          <option>Fantasía</option>
          <option>Ciencia ficción</option>
          <option>Zombies</option>
          <option>Terror</option>
        </select>
      </div>
    </header>
  )
}
