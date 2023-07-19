import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks'
import { Search } from './Icons'

interface Props {
  updateTitleFilter: ({ titleFilter }: { titleFilter: string }) => void
}

export const TitleFilter: React.FC<Props> = ({ updateTitleFilter }) => {
  const [title, setTitle] = useState('')
  const { debounceValue } = useDebounce({ value: title, delay: 350 })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  useEffect(() => {
    updateTitleFilter({ titleFilter: debounceValue })
  }, [debounceValue, updateTitleFilter])

  return (
		<div className='flex justify-start items-center bg-gray-100 rounded-lg py-2 px-4 text-sm gap-4 w-full'>
			<Search />
			<input
			className="focus:outline-none bg-transparent w-full"
			value={title}
			onChange={handleChange}
			placeholder="Search book titles..."
			/>
		</div>
  )
}
