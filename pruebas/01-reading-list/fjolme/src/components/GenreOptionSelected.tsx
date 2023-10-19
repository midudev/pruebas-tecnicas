interface Props {
  genre: string
  toggleGenre: (genre: string) => void
}

export const GenreOptionSelected = ({ genre, toggleGenre }: Props) => {
  return (
    <button
      className='cursor-pointer rounded-md px-2 p-1 bg-[#1cd760] hover:bg-[#2bec71] text-neutral-800'
      onClick={() => toggleGenre(genre)}
    >
      {genre}
      <i className="ti ti-x ml-1"></i>
    </button>
  )
}
