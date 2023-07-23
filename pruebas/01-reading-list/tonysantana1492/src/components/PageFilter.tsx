import { useId } from 'react'

interface Props {
  pageFilter: number
  maxPages: number
  updatePageFilter: ({ page }: { page: number }) => void
}

export const PageFilter: React.FC<Props> = ({ pageFilter, maxPages, updatePageFilter }) => {
  const idRange = useId()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updatePageFilter({ page: +event.target.value })
  }

  return (
		<div className="flex flex-col justify-center items-center w-2/4">
			<div className='flex justify-between w-full items-center mb-3'>
				<label className='text-xs font-bold text-gray-500' htmlFor={idRange}>Pages:</label>
				<p className='text-xs font-bold text-white bg-slate-900 px-2 rounded-full'>{pageFilter}</p>
			</div>
			<input role='filter-page' className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-gray-800' id={idRange} type="range" onChange={handleChange} value={pageFilter} min={0} max={maxPages} />
		</div>
  )
}
