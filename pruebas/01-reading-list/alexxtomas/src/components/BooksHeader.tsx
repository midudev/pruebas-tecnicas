import { useFiltersContext } from '@/hooks/useFiltersContext'

interface Props {
  title: string
  subtitle: string
}

export default function BooksHeader({ title, subtitle }: Props) {
  const { readingList } = useFiltersContext()
  return (
    <header className='flex flex-col '>
      <h2 className='text-3xl'>{title}</h2>
      <h3 className='text-xl'>${readingList.length} en la lista de lectura</h3>
    </header>
  )
}
