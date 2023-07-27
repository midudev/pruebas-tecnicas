import RangeFilter, { type Range } from './RangeFilter'
import SelectFilter, { type Option } from './SelectFilter'

interface Props {
  rangeLabel: string
  range: Range
  selectLabel: string
  selectOptions: Option[]
}

export default function Filters({ range, rangeLabel, selectLabel, selectOptions }: Props) {
  return (
    <form className='flex gap-10'>
      <section className='flex flex-col '>
        <RangeFilter label={rangeLabel} range={range} />
      </section>
      <section className='flex flex-col '>
        <SelectFilter label={selectLabel} options={selectOptions} id='gender-filter' />
      </section>
    </form>
  )
}
