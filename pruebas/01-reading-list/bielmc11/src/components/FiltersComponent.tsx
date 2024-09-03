import { type ChangeEvent } from 'react'
import './FiltersComponent.css'
import { FilterIcon } from './microComponents/FilterIcon'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from './ui/dropdown-menu'
import { Label } from './ui/label'
import { useAppDispatch, useAppSelector } from '@/hooks/useStore'
import { setBookToSearch, setMaxPages } from '@/store/booksFilters/slice'
import { Input } from './ui/input'

export const FiltersComponent = () => {
  const { maxPages, bookToSearch } = useAppSelector((state) => state.booksFilter)
  const dispatch = useAppDispatch()

  const handleMaxPagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value)
    dispatch(setMaxPages(newValue))
  }

  const handleBookToSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newValue = e.target.value
    dispatch(setBookToSearch(newValue))
  }

  return (
    <div className="self-start    text-sm  tracking-widest cursor-pointer">

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className='flex justify-center gap-1 items-center bg-green-500 text-gray-50 hover:bg-green-600 hover:text-white rounded-lg self-start px-3 py-2 text-sm'>
              <FilterIcon />
              Filters
            </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align='end' className='lg:min-w-[200px] w-full'>
          <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
          <DropdownMenuSeparator/>

          <div className='flex justify-center p-3'>
            <div className='w-full flex flex-col gap-4'>

              <div className='w-full flex flex-col gap-1'>
                <Label htmlFor='maxPages'>MAX PAGES:</Label>
                <div className='flex justify-between items-center gap-4 font-bold '>
                  <input
                  className='lg:max-w-[200px] w-full'
                    type="range"
                    min={1}
                    max={1211}
                    step={50}
                    defaultValue={maxPages ?? 1211}
                    onChange={handleMaxPagesChange}
                  />
                  <div className='flex justify-center min-w-[40px] items-center'>
                    <span>{maxPages}</span>
                  </div>
                </div>
              </div>
              <div className='w-full flex flex-col gap-2'>
                <Label htmlFor='bookToSearch'>BOOK TO SEARCH:</Label>
                <Input type='text' placeholder='Search your book' defaultValue={bookToSearch} onChange={handleBookToSearchChange}/>
              </div>

            </div>
          </div>
        </DropdownMenuContent>

        </DropdownMenu>

    </div>
  )
}
