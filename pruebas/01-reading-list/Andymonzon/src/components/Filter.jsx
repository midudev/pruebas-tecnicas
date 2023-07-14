import { RangeFilter } from './RangeFilter'
import { SelectFilter } from './SelectFilter'

function Filter () {
  return (
    <form className='text-black flex gap-5'>
      <SelectFilter />
      <RangeFilter />
    </form>
  )
}

export { Filter }
