interface Props {
  text: string
  count: number
  onClick: () => void
}

export const BooksTabUnselected = ({ text, count, onClick }: Props) => {
  return (
    <button
      className='flex hover:cursor-pointer hover:bg-neutral-700 bg-neutral-800 rounded-full py-1 w-[105px]'
      onClick={onClick}
    >
      <span className='px-2'>{text}</span>
      <span className='pr-2 grow text-right'>{count}</span>
    </button>
  )
}
