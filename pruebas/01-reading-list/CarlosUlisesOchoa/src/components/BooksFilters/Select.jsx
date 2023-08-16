import PropTypes from 'prop-types'
import { useId } from 'react'

export function Select({ label, options, defaultValue, className = '', onChange }) {
  const id = useId()

  return (
    <>
      {label && (
        <label htmlFor={id} className={className}>
          {label}
        </label>
      )}
      <select
        name={id}
        id={id}
        defaultValue={defaultValue}
        className='w-full bg-zinc-800 py-2 px-3 rounded-md text-white transition-colors duration-150 hover:bg-zinc-700'
        onChange={onChange}>
        {options.map((opt, i) => (
          <option value={opt} key={i}>
            {opt}
          </option>
        ))}
      </select>
    </>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
}
