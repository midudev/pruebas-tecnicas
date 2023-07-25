import { Arrow } from './Icons'
import { useMenu } from '../hooks/useMenu'

export function Dropdown ({ name, options, onClick }) {
  const { open, updateOpen, menuRef } = useMenu()

  const handleClick = (option) => {
    onClick(option)
    updateOpen(false)
  }

  return (
    <div ref={menuRef} className='relative'>
      <button
        className='group text-xl flex gap-1 items-center hover:brightness-150'
        onClick={() => updateOpen(!open)} >
          {name}
          <Arrow className={`${open ? 'rotate-180' : ''} group-hover:brightness-150`} />
      </button>
      <ul className={`absolute text-white text-base w-max top-full left-0 flex flex-col items-start bg-sky-950 py-1 ${open ? '' : 'hidden'}`}>
        {
          options.map((option, i) => (
            <li
              onClick={() => handleClick(option)}
              className='hover:bg-sky-900 w-full text-start px-2 py-1 cursor-pointer'
              key={i}>
                {option}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
