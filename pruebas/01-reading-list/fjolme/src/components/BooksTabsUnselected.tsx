interface Props {
  text: string
  count: number
  onClick: () => void
}

export const BooksTabUnselected = ({ text, count, onClick }: Props) => {
  return (
    <button
      className='flex hover:cursor-pointer hover:bg-neutral-700 bg-transparent rounded-full py-1'
      onClick={onClick}
    >
      <span className='px-2'>{text}</span>
      <span className='pr-2'>{count}</span>
    </button>
  )
}
