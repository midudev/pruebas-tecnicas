interface Props {
  title: string
  subtitle: string
}

export default function BooksHeader({ title, subtitle }: Props) {
  return (
    <header className='flex flex-col '>
      <h2 className='text-3xl'>{title}</h2>
      <h3 className='text-xl'>{subtitle}</h3>
    </header>
  )
}
