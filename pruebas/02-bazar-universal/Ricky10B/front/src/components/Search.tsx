import { IconSearch } from '../icons'

export function Search ({ isEmpty = false }: { isEmpty?: boolean }) {
  const className = 'border border-red-400'

  return (
    <fieldset
      className='relative flex items-center w-full'
    >
      <input
        type='text'
        name='search'
        placeholder='laptops, smartphones...'
        aria-label='Search the products'
        className={`outline-none py-2 pl-2 pr-8 bg-gray-200 rounded-md placeholder:text-gray-400 w-full ${isEmpty && className}`}
      />
      <span
        className='absolute right-1 text-gray-400'
        role='img'
        aria-hidden='true'
      >
        <IconSearch />
      </span>
    </fieldset>
  )
}
