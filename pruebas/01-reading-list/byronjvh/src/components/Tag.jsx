import { CrossIcon } from './Icons'

export function Tag ({ name, onDelete }) {
  return (
    <button
      className='w-max group hover:brightness-95 flex items-center gap-1 rounded-full px-3 bg-sky-200'
      type='button'
      onClick={() => onDelete(undefined)}>
      {name}
      <span className='text-2xl'>
       <CrossIcon className='group-hover:brightness-95' />
      </span>
    </button>
  )
}
