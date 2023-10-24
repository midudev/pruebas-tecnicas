import { useBooksStore } from '../store/books'

interface Props {
  onPagesStateChange: React.ChangeEventHandler<HTMLInputElement>
  pagesState: number
}

const Range = ({ pagesState, onPagesStateChange }: Props) => {
  const maxPages = useBooksStore(state => state.maxPages)
  const minPages = useBooksStore(state => state.minPages)

  return (
    <div className='mt-6'>
      <p className='font-primary text-sm text-slate-500'>
        Hasta <span className='text-slate-300'>{pagesState}</span> páginas
      </p>
      <label
        htmlFor='default-range'
        className='sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white'
      >
        Default range
      </label>
      <input
        type='range'
        value={pagesState}
        min={minPages}
        max={maxPages}
        onChange={onPagesStateChange}
        className='h-1 w-1/2 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
      />
    </div>
  )
}

export default Range
