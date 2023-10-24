import { useFiltersContext } from '@/hooks/useFiltersContext'

export interface Option {
  value: string
  label: string
}

interface Props {
  id: string
  label: string
  options: Option[]
}

export default function SelectFilter({ id, label, options }: Props) {
  const { updateSelectFilter } = useFiltersContext()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
      ? options.find((option) => option.value === e.target.value)?.label ?? null
      : null
    updateSelectFilter(value)
  }
  return (
    <>
      <label className='text-xl' htmlFor={id}>
        {label}
      </label>
      <select onChange={handleChange} id={id} className='text-black capitalize'>
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </>
  )
}
