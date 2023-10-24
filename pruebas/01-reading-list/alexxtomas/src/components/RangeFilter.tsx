'use client'

import { useFiltersContext } from '@/hooks/useFiltersContext'

export interface Range {
  id: string
  max: number
}

interface Props {
  label: string
  range: Range
}

export default function RangeFilter({ label, range }: Props) {
  const { rangeFilter, updateRangeFilter } = useFiltersContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateRangeFilter(event.target.valueAsNumber || null)
  }

  return (
    <>
      <label className='text-xl' htmlFor={range.id}>
        {label}
      </label>
      <input
        value={rangeFilter ?? 0}
        id={range.id}
        type='range'
        max={range.max}
        onChange={handleChange}
      />
      <span>{rangeFilter ?? 0}</span>
    </>
  )
}
