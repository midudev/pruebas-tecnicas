interface Props {
  text: string
  count: number
}

export const BooksTabSelected = ({ text, count }: Props) => {
  return (
    <span
      className='flex bg-[#0d72ea] rounded-full py-1'
    >
      <span className='px-2'>{text}</span>
      <span className='pr-2'>{count}</span>
    </span>
  )
}
