interface Props {
  genre: string
  toggleGenre: (genre: string) => void
}

export const GenreOptionUnselected = ({ genre, toggleGenre }: Props) => {
  return (
    <button
      className='cursor-pointer rounded-md px-2 p-1 bg-neutral-800 hover:bg-neutral-700'
      onClick={() => toggleGenre(genre)}
    >
      {genre}
      <i className="ti ti-plus ml-1"></i>
    </button>
  )
}
