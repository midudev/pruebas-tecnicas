import PropTypes from 'prop-types'
import { useId } from 'react'

export function Select({ label, className, options, defaultValue, onChange }) {
  const id = useId()

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          {label}
        </label>
      )}
      <select
        name={id}
        id={id}
        defaultValue={defaultValue}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
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
